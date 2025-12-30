"use client";

import { useState } from "react";
import { analyzeApiResponse } from "@/lib/tools/apiResponseViewer";

export default function ApiResponseViewerTool() {
  const example = `{
  "status": "success",
  "data": {
    "user": {
      "id": 12,
      "email": "user@example.com",
      "roles": ["admin", "editor"]
    }
  }
}`;

  const [input, setInput] = useState(example);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    try {
      setError("");
      setResult(analyzeApiResponse(input));
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">API Response (JSON)</label>
        <textarea
          className="w-full h-48 mt-2 p-3 border rounded font-mono text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button
        onClick={handleAnalyze}
        className="cursor-pointer px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
      >
        Analyze Response
      </button>

      {error && <div className="text-red-600">{error}</div>}

      {result && (
        <div className="space-y-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <span>
              <strong>Type:</strong> {result.type}
            </span>
            <span>
              <strong>Size:</strong> {result.sizeKB} KB
            </span>
          </div>

          <pre className="p-4 border rounded bg-gray text-sm overflow-auto max-h-96">
            {JSON.stringify(result.parsed, null, 2)}
          </pre>

          <button
            onClick={() =>
              navigator.clipboard.writeText(
                JSON.stringify(result.parsed, null, 2)
              )
            }
            className="cursor-pointer px-4 py-2 rounded border hover:border-sky-500 hover:text-sky-500"
          >
            Copy Formatted JSON
          </button>
        </div>
      )}
    </div>
  );
}
