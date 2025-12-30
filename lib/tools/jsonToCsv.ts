// frontend/lib/tools/jsonToCsv.ts

export function jsonToCsv(input: string): string {
  if (!input.trim()) {
    throw new Error("Input is empty");
  }

  let data: any;

  try {
    data = JSON.parse(input);
  } catch {
    throw new Error("Invalid JSON format");
  }

  // Normalize to array
  if (!Array.isArray(data)) {
    data = [data];
  }

  if (data.length === 0) {
    throw new Error("JSON array is empty");
  }

  // Flatten objects
  const flattenObject = (obj: any, parent = "", res: any = {}) => {
    for (const key in obj) {
      const propName = parent ? `${parent}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = Array.isArray(obj[key])
          ? JSON.stringify(obj[key])
          : obj[key];
      }
    }
    return res;
  };

  const flattenedData = data.map((item) => flattenObject(item));

  // Collect headers
  const headers = Array.from(
    new Set(flattenedData.flatMap((obj) => Object.keys(obj)))
  );

  // CSV rows
  const csvRows = [
    headers.join(","), // header row
    ...flattenedData.map((row) =>
      headers
        .map((field) => {
          const value = row[field] ?? "";
          const escaped = String(value).replace(/"/g, '""');
          return `"${escaped}"`;
        })
        .join(",")
    ),
  ];

  return csvRows.join("\n");
}
