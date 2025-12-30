"use client";

import { useState } from "react";
import { decodeJwt } from "@/lib/tools/jwtDecoder";

export default function JwtDecoderTool() {
  const exampleJwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cCI6MTk5OTk5OTk5OX0.signature";

  const [token, setToken] = useState(exampleJwt);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleDecode = () => {
    try {
      setError("");
      setResult(decodeJwt(token));
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">JWT Token</label>
        <textarea
          className="w-full h-32 mt-2 p-3 border rounded font-mono text-sm"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>

      <button
        onClick={handleDecode}
        className="cursor-pointer px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
      >
        Decode JWT
      </button>

      {error && <div className="text-red-600">{error}</div>}

      {result && (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Header</h3>
            <pre className="p-3 border rounded bg-gray text-sm overflow-auto">
              {JSON.stringify(result.header, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Payload</h3>
            <pre className="p-3 border rounded bg-gray text-sm overflow-auto">
              {JSON.stringify(result.payload, null, 2)}
            </pre>
          </div>

          <div className="md:col-span-2">
            <strong>Expiration:</strong> {result.expiration}
          </div>
        </div>
      )}
    </div>
  );
}
