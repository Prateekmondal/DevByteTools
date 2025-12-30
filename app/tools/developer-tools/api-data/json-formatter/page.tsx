import Link from "next/link";
import JsonFormatterTool from "@/components/tool/JsonFormatterTool";
import { softwareApplicationSchema } from "@/lib/seo/toolSchema";
import { faqSchema } from "@/lib/seo/faqSchema";

export const metadata = {
  title: "JSON Formatter & Validator – Free Online Developer Tool",
  description:
    "Format, minify, and validate JSON instantly. Free online tool for developers working with APIs.",
};

export default function JsonFormatterPage() {
  const softwareSchema = softwareApplicationSchema({
    name: "JSON Formatter & Validator",
    description:
      "Format, minify, and validate JSON instantly. Free online tool for developers.",
    url: "https://yourdomain.com/tools/developer-tools/api-data/json-formatter/",
  });

  const faqData = [
    {
      question: "Is this JSON formatter free?",
      answer:
        "Yes, this tool is completely free and does not require registration.",
    },
    {
      question: "Does this tool store my JSON data?",
      answer:
        "No. All formatting and validation happens locally in your browser.",
    },
    {
      question: "Can I minify JSON for production use?",
      answer:
        "Yes. The minify option removes all unnecessary whitespace safely.",
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
          JSON Formatter & Validator (Free Tool)
        </h1>
        <p className="mt-2 text-gray-600">
          Beautify, minify, and validate JSON instantly. Ideal for API debugging
          and development.
        </p>
      </header>

      <JsonFormatterTool />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">What does this tool do?</h2>
        <p>
          This tool helps developers format JSON for readability, minify it for
          production, and validate its syntax before sending or storing data.
        </p>

        <h2 className="text-xl font-semibold">Common use cases</h2>
        <ul className="list-disc pl-6">
          <li>Debugging API responses</li>
          <li>Cleaning JSON before commits</li>
          <li>Validating payloads</li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
          Related Developer Tools
        </h2>
        <ul className="space-y-2">
          <li>
            <a href="/tools/developer-tools/api-data/json-to-csv" className="text-sky-600">
              JSON to CSV Converter
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
    </main>
  );
}
