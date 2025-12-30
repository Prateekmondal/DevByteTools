"use client";

import { useState, useEffect } from "react";
import { jsonToCsv } from "@/lib/tools/jsonToCsv";

export default function JsonToCsvTool() {
  const exampleJson = `[
  { "id": 1, "name": "Alice", "email": "alice@test.com" },
  { "id": 2, "name": "Bob", "email": "bob@test.com" }
]`;

  const [input, setInput] = useState(exampleJson);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const csv = jsonToCsv(input);
      setOutput(csv);
      setError("");
    } catch (err: any) {
      setOutput("");
      setError(err.message);
    }
  }, [input]);

  const downloadCsv = () => {
    const blob = new Blob([output], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.csv";
    link.click();
  };

  return (
    <section className="grid gap-6 md:grid-cols-2">
        {/* INPUT */}
        <div>
          <label className="mb-2 block font-medium">JSON Input</label>
        <textarea
          className="h-80 w-full rounded-lg border p-3 font-mono text-sm"
            value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm font-medium">{error}</div>
      )}

      <div>
        <label className="mb-2 block font-medium">CSV Output</label>
        <textarea
          className="h-80 w-full rounded-lg border p-3 font-mono text-sm"
          value={output}
          readOnly
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigator.clipboard.writeText(output)}
          disabled={!output}
          className="cursor-pointer px-4 py-2 rounded border bg-black text-white disabled:opacity-50 hover:border-sky-500 hover:text-sky-500"
        >
          Copy CSV
        </button>

        <button
          onClick={downloadCsv}
          disabled={!output}
          className="cursor-pointer rounded-lg bg-sky-500 px-6 py-3 text-white font-medium hover:bg-sky-600"
        >
          Download CSV
        </button>
      </div>
    </section>
  );
}
