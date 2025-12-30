"use client";

import { useState } from "react";
import {
  formatJson,
  minifyJson,
  validateJson,
} from "@/lib/tools/jsonFormatter";

export default function JsonFormatterTool() {
  const exampleJson = `{
  "id": 1,
  "name": "Alice",
  "email": "alice@test.com",
  "active": true
}`;

  const [input, setInput] = useState(exampleJson);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleAction = (action: "format" | "minify" | "validate") => {
    try {
      setError("");
      setStatus("");

      if (action === "format") {
        setOutput(formatJson(input));
      } else if (action === "minify") {
        setOutput(minifyJson(input));
      } else {
        setStatus(validateJson(input));
        setOutput("");
      }
    } catch (err: any) {
      setError(err.message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">JSON Input</label>
        <textarea
          className="w-full h-64 mt-2 p-3 border rounded font-mono text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleAction("format")}
          className="cursor-pointer px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
        >
          Format
        </button>
        <button
          onClick={() => handleAction("minify")}
          className="cursor-pointer px-4 py-2 border rounded-lg bg-gray text-white hover:bg-sky-600 hover:border-sky-500"
        >
          Minify
        </button>
        <button
          onClick={() => handleAction("validate")}
          className="cursor-pointer px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
        >
          Validate
        </button>
      </div>

      {error && (
        <div className="text-red-600 text-sm font-medium">{error}</div>
      )}

      {status && (
        <div className="text-green-600 text-sm font-medium">{status}</div>
      )}

      {output && (
        <div>
          <label className="font-medium">Output</label>
          <textarea
            className="w-full h-64 mt-2 p-3 border rounded font-mono text-sm bg-gray"
            value={output}
            readOnly
          />
          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="cursor-pointer mt-3 px-4 py-2 rounded border bg-black text-white hover:border-sky-500 hover:text-sky-500"
          >
            Copy Output
          </button>
        </div>
      )}
    </div>
  );
}
