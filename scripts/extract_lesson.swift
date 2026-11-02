import AppKit
import Darwin
import Foundation
import PDFKit
import Vision

func fail(_ message: String, code: Int32) -> Never {
    fputs("Errore: \(message)\n", stderr)
    exit(code)
}

guard CommandLine.arguments.count == 3 else {
    fail("uso interno: extract_lesson.swift CARTELLA FILE_OUTPUT", code: 64)
}

let root = URL(fileURLWithPath: CommandLine.arguments[1], isDirectory: true).standardizedFileURL
let output = URL(fileURLWithPath: CommandLine.arguments[2]).standardizedFileURL
var isDirectory: ObjCBool = false
guard FileManager.default.fileExists(atPath: root.path, isDirectory: &isDirectory), isDirectory.boolValue else {
    fail("cartella lezione non trovata: \(root.path)", code: 66)
}

let manager = FileManager.default
let files = (manager.enumerator(at: root, includingPropertiesForKeys: nil)?.allObjects as? [URL] ?? [])
    .filter { $0.pathExtension.lowercased() == "pdf" }
    .sorted { $0.path.localizedStandardCompare($1.path) == .orderedAscending }

guard !files.isEmpty else {
    fail("nessun PDF trovato dentro \(root.path)", code: 66)
}

func recognizeText(on page: PDFPage) -> String {
    let bounds = page.bounds(for: .mediaBox)
    let size = CGSize(width: max(1, bounds.width * 2.5), height: max(1, bounds.height * 2.5))
    let image = page.thumbnail(of: size, for: .mediaBox)
    guard let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        return "[OCR non disponibile per questa pagina]"
    }

    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = true
    request.automaticallyDetectsLanguage = true

    do {
        try VNImageRequestHandler(cgImage: cgImage).perform([request])
    } catch {
        return "[Errore OCR: \(error.localizedDescription)]"
    }

    let observations = (request.results ?? []).sorted {
        if abs($0.boundingBox.midY - $1.boundingBox.midY) > 0.012 {
            return $0.boundingBox.midY > $1.boundingBox.midY
        }
        return $0.boundingBox.minX < $1.boundingBox.minX
    }
    return observations.compactMap { $0.topCandidates(1).first?.string }.joined(separator: "\n")
}

var outputText = ""
var ocrPages = 0
var nativePages = 0
var openErrors = 0
var ocrErrors = 0

for url in files {
    let relativePath = String(url.path.dropFirst(root.path.count + 1))
    outputText += "\n\n===== PDF: \(relativePath) =====\n"

    guard let document = PDFDocument(url: url) else {
        openErrors += 1
        outputText += "[PDFKit non è riuscito ad aprire il file]\n"
        continue
    }

    for index in 0..<document.pageCount {
        guard let page = document.page(at: index) else { continue }
        let nativeText = (page.string ?? "").trimmingCharacters(in: .whitespacesAndNewlines)
        let pageText: String

        if nativeText.count < 400 {
            ocrPages += 1
            pageText = recognizeText(on: page)
            if pageText.contains("[Errore OCR:") || pageText.contains("[OCR non disponibile") {
                ocrErrors += 1
            }
        } else {
            nativePages += 1
            pageText = nativeText
        }

        outputText += "\n--- PAGINA \(index + 1) ---\n\(pageText)\n"
    }
}

do {
    try manager.createDirectory(at: output.deletingLastPathComponent(), withIntermediateDirectories: true)
    try outputText.write(to: output, atomically: true, encoding: .utf8)
} catch {
    fail("non riesco a salvare il testo in \(output.path): \(error.localizedDescription)", code: 73)
}

print("PDF elaborati: \(files.count); pagine con testo incorporato: \(nativePages); pagine passate a OCR: \(ocrPages); errori di apertura PDF: \(openErrors); errori OCR: \(ocrErrors)")
print("Testo estratto: \(output.path)")
