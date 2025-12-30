import Link from "next/link";
import JsonToCsvTool from "@/components/tool/JsonToCsvTool";
import { softwareApplicationSchema } from "@/lib/seo/toolSchema";
import { faqSchema } from "@/lib/seo/faqSchema";

export const metadata = {
  title: "JSON to CSV Converter – Free Developer Tool",
  description:
    "Convert JSON to CSV instantly. No login, no tracking. Built for developers working with API responses.",
};

export default function JsonToCsvPage() {
  const softwareSchema = softwareApplicationSchema({
    name: "JSON to CSV Converter",
    description:
      "Convert JSON to CSV instantly. Free online tool for developers handling API responses.",
    url: "https://yourdomain.com/tools/developer-tools/api-data/json-to-csv/",
  });

  const faqData = [
    {
      question: "Is this JSON to CSV converter free?",
      answer:
        "Yes, this tool is completely free and does not require registration.",
    },
    {
      question: "Is my JSON data uploaded to a server?",
      answer:
        "No. All processing happens locally in your browser. Your data is never stored.",
    },
    {
      question: "Can I convert nested JSON objects?",
      answer:
        "Yes. Nested objects are flattened automatically using dot notation.",
    },
  ];
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqData)),
        }}
      />

      <header>
        <h1 className="text-3xl font-bold">
          JSON to CSV Converter (Free Online Tool)
        </h1>
        <p className="mt-2 text-gray-600">
          Convert JSON data into CSV format instantly. All processing happens in
          your browser.
        </p>
      </header>

      <JsonToCsvTool />

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
        <pre className="rounded-lg bg-gray border p-4 text-sm overflow-x-auto">
{`[
  { "id": 1, "name": "Alice", "email": "alice@test.com" },
  { "id": 2, "name": "Bob", "email": "bob@test.com" }
]`}
        </pre>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Related Developer Tools
        </h2>
        <ul className="space-y-2">
          <li>
            <a href="/tools/developer-tools/api-data/json-formatter" className="text-sky-600">
              JSON Formatter & Validator
            </a>
          </li>
          <li>
            <a href="/tools/developer-tools/api-data/api-response-viewer" className="text-sky-600">
              API Response Viewer
            </a>
          </li>
          <li>
            <a href="/tools/developer-tools/api-data/jwt-decoder" className="text-sky-600">
              JWT Decoder
            </a>
          </li>
          <li>
            <h2 className="text-1xl font-semibold mt-5 mb-4">
              <a href="/tools/developer-tools/api-data" className="text-sky-600">
                All Developer Tools
              </a>
            </h2>
          </li>
        </ul>
      </article>
    </main>
  );
}
