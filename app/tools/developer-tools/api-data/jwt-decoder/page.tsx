import Link from "next/link";
import JwtDecoderTool from "@/components/tool/JwtDecoderTool";
import { softwareApplicationSchema } from "@/lib/seo/toolSchema";
import { faqSchema } from "@/lib/seo/faqSchema";

export const metadata = {
  title: "JWT Decoder – Decode JSON Web Tokens Online",
  description:
    "Decode JWT tokens instantly. View header, payload, and expiration. Free and secure client-side tool.",
};

export default function JwtDecoderPage() {
  const softwareSchema = softwareApplicationSchema({
    name: "JWT Decoder",
    description:
      "Decode JSON Web Tokens to inspect header, payload, and expiration.",
    url: "https://yourdomain.com/tools/developer-tools/api-data/jwt-decoder/",
  });

  const faqData = [
    {
      question: "Does this JWT decoder verify signatures?",
      answer:
        "No. This tool only decodes the token contents and does not validate signatures.",
    },
    {
      question: "Is my JWT data safe?",
      answer:
        "Yes. All decoding happens locally in your browser. No data is sent to servers.",
    },
    {
      question: "Can I check JWT expiration?",
      answer:
        "Yes. The tool displays expiration time if the exp field exists.",
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
        <h1 className="text-3xl font-bold">JWT Decoder (Free Online Tool)</h1>
        <p className="mt-2 text-gray-600">
          Decode JSON Web Tokens to inspect headers, payloads, and expiration.
        </p>
      </header>

      <JwtDecoderTool />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">What is a JWT?</h2>
        <p>
          A JSON Web Token (JWT) is a compact token format used for secure API
          authentication and authorization.
        </p>
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
