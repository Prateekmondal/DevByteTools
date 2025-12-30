"use client";

import { useState } from "react";

export const metadata = {
  title: "JSON to CSV Converter – Free Developer Tool",
  description:
    "Convert JSON to CSV instantly. No login, no tracking. Built for developers working with API responses.",
};

export default function JsonToCsvPage() {
  const [jsonInput, setJsonInput] = useState(sampleJson);
  const [csvOutput, setCsvOutput] = useState("");
  const [error, setError] = useState("");

  const convertToCsv = () => {
    try {
      const data = JSON.parse(jsonInput);
      if (!Array.isArray(data)) {
        throw new Error("JSON must be an array of objects");
      }

      const headers = Object.keys(data[0]);
      const rows = data.map((obj) =>
        headers.map((h) => JSON.stringify(obj[h] ?? "")).join(",")
      );

      setCsvOutput([headers.join(","), ...rows].join("\n"));
      setError("");
    } catch (err: any) {
      setError(err.message);
      setCsvOutput("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(csvOutput);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">
          JSON to CSV Converter
        </h1>
        <p className="mt-2 text-gray-600">
          Convert JSON API responses into CSV format instantly.
        </p>
      </header>

      {/* TOOL UI */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* INPUT */}
        <div>
          <label className="mb-2 block font-medium">
            JSON Input
          </label>
          <textarea
            className="h-80 w-full rounded-lg border p-3 font-mono text-sm"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>

        {/* OUTPUT */}
        <div>
          <label className="mb-2 block font-medium">
            CSV Output
          </label>
          <textarea
            className="h-80 w-full rounded-lg border p-3 font-mono text-sm"
            value={csvOutput}
            readOnly
          />
        </div>
      </section>

      {/* ACTIONS */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={convertToCsv}
          className="rounded-lg bg-sky-500 px-6 py-3 text-white font-medium hover:bg-sky-600"
        >
          Convert to CSV
        </button>

        {csvOutput && (
          <button
            onClick={copyToClipboard}
            className="rounded-lg border px-6 py-3 font-medium"
          >
            Copy CSV
          </button>
        )}
      </div>

      {error && (
        <p className="mt-4 text-red-500 font-medium">
          {error}
        </p>
      )}

      {/* SEO CONTENT */}
      <article className="mt-20 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          What does this tool do?
        </h2>
        <p className="text-gray-700 mb-6">
          This JSON to CSV converter helps developers transform structured JSON
          data into CSV format for use in Excel, Google Sheets, analytics tools,
          or reporting pipelines.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          When should you use JSON to CSV?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Working with REST API responses</li>
          <li>Preparing data for spreadsheets</li>
          <li>Exporting logs or reports</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Example JSON to CSV conversion
        </h2>
        <pre className="rounded-lg bg-gray-100 p-4 text-sm overflow-x-auto">
{`[
  { "id": 1, "name": "Alice", "role": "admin" },
  { "id": 2, "name": "Bob", "role": "user" }
]`}
        </pre>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Related Developer Tools
        </h2>
        <ul className="space-y-2">
          <li>
            <a href="/tools/json-formatter" className="text-sky-600">
              JSON Formatter & Validator
            </a>
          </li>
          <li>
            <a href="/tools/api-response-viewer" className="text-sky-600">
              API Response Viewer
            </a>
          </li>
          <li>
            <a href="/tools/timestamp-converter" className="text-sky-600">
              Unix Timestamp Converter
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}

/* ---------- SAMPLE DATA ---------- */

const sampleJson = `[
  { "id": 1, "name": "Alice", "role": "admin" },
  { "id": 2, "name": "Bob", "role": "user" }
]`;
