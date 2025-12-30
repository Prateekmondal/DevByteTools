// frontend/lib/tools/jsonFormatter.ts

export function parseJson(input: string): any {
  if (!input.trim()) {
    throw new Error("Input is empty");
  }

  try {
    return JSON.parse(input);
  } catch (err: any) {
    throw new Error("Invalid JSON format");
  }
}

export function formatJson(input: string, indent = 2): string {
  const parsed = parseJson(input);
  return JSON.stringify(parsed, null, indent);
}

export function minifyJson(input: string): string {
  const parsed = parseJson(input);
  return JSON.stringify(parsed);
}

export function validateJson(input: string): string {
  parseJson(input);
  return "Valid JSON";
}
