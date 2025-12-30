import Link from "next/link";

export const metadata = {
  title: "DevByteTools – Free Developer Tools for APIs, Data & Code",
  description:
    "Fast, privacy-first developer tools for working with APIs, JSON, timestamps, encoding, and code. No login. No tracking.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Free Developer Tools for APIs, Data & Code
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Fast, privacy-first utilities built by developers for developers.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/tools/developer-tools/api-data"
            className="rounded-lg bg-sky-500 px-6 py-3 text-white font-medium hover:bg-sky-600"
          >
            Explore Developer Tools →
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
          <span>✔ No login</span>
          <span>✔ No tracking</span>
          <span>✔ Instant results</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Developer Tools That Solve Real Problems
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          <Category
            title="API & Data Tools"
            items={[
              "JSON to CSV Converter",
              "JSON Formatter & Validator",
              "API Response Viewer",
            ]}
            links={[
              "/tools/developer-tools/api-data/json-to-csv",
              "/tools/developer-tools/api-data/json-formatter",
              "/tools/developer-tools/api-data/api-response-viewer",
            ]}
          />
          <Category
            title="Encoding & Decoding"
            items={[
              // "Base64 Encode / Decode",
              "JWT Decoder",
              // "URL Encoder / Decoder",
            ]}
            links={[
              // "/tools/base64",
              "/tools/developer-tools/api-data/jwt-decoder",
              // "/tools/url-encoder",
            ]}
          />
          <Category
            title="Time & Identifiers"
            items={[
              // "Unix Timestamp Converter",
              // "UUID Generator",
            ]}
          />
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Popular Tools</h2>

        <div className="grid gap-6 sm:grid-cols-3">
          <ToolCard
            title="JSON to CSV Converter"
            description="Convert API responses into CSV for Excel or analytics."
            href="/tools/developer-tools/api-data/json-to-csv"
          />
          <ToolCard
            title="JSON Formatter & Validator"
            description="Format and validate JSON data directly in your browser."
            href="/tools/developer-tools/api-data/json-formatter"
          />
          <ToolCard
            title="JWT Decoder"
            description="Decode JWT headers and payloads securely in your browser."
            href="/tools/developer-tools/api-data/jwt-decoder"
          />
          <ToolCard
            title="API Response Viewer"
            description="View and analyze API responses in a structured format."
            href="/tools/developer-tools/api-data/api-response-viewer"
          />
        </div>
      </section>

      {/* WHY */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Why Developers Use DevByteTools
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 text-gray-700">
          <li>🚀 Fast and lightweight</li>
          <li>🔒 Privacy-first by design</li>
          <li>🧠 Built from real dev workflows</li>
          <li>🛠 Focused tools — no clutter</li>
        </ul>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold">
          Build Faster with the Right Tools
        </h2>
        <p className="mt-2 text-gray-600">
          Simple tools that respect your time and data.
        </p>
      </section>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function Category({
  title,
  items,
  links,
}: {
  title: string;
  items: string[];
  links?: string[];
}) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="space-y-1 text-gray-600 text-sm">
        {items.map((item, idx) => {
          const href = links?.[idx];
          return (
            <li key={item}>
              {href ? <Link href={href}>• {item}</Link> : <>• {item}</>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border p-5 hover:border-sky-400"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
  );
}
