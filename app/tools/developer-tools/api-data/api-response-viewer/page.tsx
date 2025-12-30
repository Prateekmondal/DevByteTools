import Link from "next/link";
import ApiResponseViewerTool from "@/components/tool/ApiResponseViewerTool";
import { softwareApplicationSchema } from "@/lib/seo/toolSchema";
import { faqSchema } from "@/lib/seo/faqSchema";

export const metadata = {
  title: "API Response Viewer – Pretty Print & Inspect JSON Responses",
  description:
    "View, analyze, and pretty-print API JSON responses. Inspect size, structure, and data instantly.",
};

export default function ApiResponseViewerPage() {
  const softwareSchema = softwareApplicationSchema({
    name: "API Response Viewer",
    description:
      "Pretty-print and inspect API JSON responses directly in your browser.",
    url: "https://yourdomain.com/tools/developer-tools/api-data/api-response-viewer/",
  });

  const faqData = [
    {
      question: "Does this tool send data to a server?",
      answer:
        "No. All processing happens locally in your browser for maximum privacy.",
    },
    {
      question: "Can I inspect large API responses?",
      answer:
        "Yes, but very large responses may impact browser performance.",
    },
    {
      question: "Is this tool free?",
      answer:
        "Yes. This API response viewer is completely free to use.",
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
          API Response Viewer (Free Online Tool)
        </h1>
        <p className="mt-2 text-gray-600">
          Analyze, format, and inspect API JSON responses instantly.
        </p>
      </header>

      <ApiResponseViewerTool />

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
          <a href="/tools/developer-tools/api-data/json-formatter" className="text-sky-600">
            JSON Formatter & Validator
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
