// frontend/lib/tools/apiResponseViewer.ts

export function analyzeApiResponse(input: string) {
  if (!input.trim()) {
    throw new Error("Response is empty");
  }

  try {
    const parsed = JSON.parse(input);

    const sizeBytes = new Blob([input]).size;

    return {
      parsed,
      sizeKB: (sizeBytes / 1024).toFixed(2),
      type: Array.isArray(parsed) ? "Array" : "Object",
    };
  } catch {
    throw new Error("Invalid JSON response");
  }
}
