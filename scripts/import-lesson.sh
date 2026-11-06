#!/bin/sh
set -eu

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "Uso: $0 CARTELLA_LEZIONE [FILE_OUTPUT.txt]" >&2
  exit 64
fi

input_dir=$1
if [ ! -d "$input_dir" ]; then
  echo "Cartella non trovata: $input_dir" >&2
  exit 66
fi

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if [ "$#" -eq 2 ]; then
  output_file=$2
else
  folder_name=$(basename -- "$input_dir")
  timestamp=$(date +%Y%m%d-%H%M%S)
  output_file="${TMPDIR:-/tmp}/delearn-${folder_name}-${timestamp}.txt"
fi

swift "$script_dir/extract_lesson.swift" "$input_dir" "$output_file"

if command -v node >/dev/null 2>&1; then
  printf '\nConfronto con il vocabolario esistente:\n'
  if ! node "$script_dir/review-lesson.js" "$output_file"; then
    printf 'Il testo è stato estratto; il confronto automatico non è riuscito.\n' >&2
  fi
else
  printf '\nPer il confronto automatico installa Node.js o usa in seguito:\n  node "%s/review-lesson.js" "%s"\n' "$script_dir" "$output_file" >&2
fi
