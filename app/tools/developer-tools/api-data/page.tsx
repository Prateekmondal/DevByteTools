import Link from "next/link";
import { softwareApplicationSchema } from "@/lib/seo/toolSchema";

export default function ApiDataToolsHub() {
  const schema = softwareApplicationSchema({
    name: "API & JSON Developer Tools",
    description:
      "Free online tools for API developers to format, convert, and decode JSON data.",
    url: "https://yourdomain.com/tools/developer-tools/api-data/",
  });

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="space-y-4">
        <h1 className="text-4xl font-bold">
          Free API & JSON Developer Tools
        </h1>
        <p className="text-gray-600 max-w-3xl">
          A growing collection of fast, privacy-friendly developer tools for
          working with APIs, JSON data, and authentication tokens. All tools run
          directly in your browser.
        </p>
      </header>

      {/* Tools List */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* API response viewer */}
        <div className="border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold">API Response Viewer</h2>
          <p className="text-sm text-gray-600">
            View, analyze, and pretty-print API JSON responses.
          </p>
          <Link
            href="/tools/developer-tools/api-data/api-response-viewer/"
            className="text-white font-medium underline"
          >
            Open Tool →
          </Link>
        </div>

        {/* JSON to CSV */}
        <div className="border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold">JSON to CSV Converter</h2>
          <p className="text-sm text-gray-600">
            Convert JSON data into CSV format instantly. Ideal for spreadsheets
            and data analysis.
          </p>
          <Link
            href="/tools/developer-tools/api-data/json-to-csv/"
            className="text-white font-medium underline"
          >
            Open Tool →
          </Link>
        </div>

        {/* JSON Formatter */}
        <div className="border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold">JSON Formatter & Validator</h2>
          <p className="text-sm text-gray-600">
            Beautify, minify, and validate JSON for easier debugging and clean
            API responses.
          </p>
          <Link
            href="/tools/developer-tools/api-data/json-formatter/"
            className="text-white font-medium underline"
          >
            Open Tool →
          </Link>
        </div>

        {/* JWT Decoder */}
        <div className="border rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold">JWT Decoder</h2>
          <p className="text-sm text-gray-600">
            Decode JSON Web Tokens to inspect headers, payloads, and expiration
            times securely.
          </p>
          <Link
            href="/tools/developer-tools/api-data/jwt-decoder/"
            className="text-white font-medium underline"
          >
            Open Tool →
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Who are these tools for?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Backend & frontend developers</li>
          <li>API designers & integrators</li>
          <li>QA engineers</li>
          <li>Students learning APIs</li>
        </ul>
      </section>

      {/* Internal SEO Content */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why use our developer tools?</h2>
        <p className="text-gray-700">
          Unlike bloated online utilities, our tools are fast, ad-light, and
          privacy-focused. All processing happens locally in your browser, so
          your data never leaves your machine.
        </p>
      </section>
    </main>
  );
}
