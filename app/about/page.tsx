export const metadata = {
  title: "About DevByteTools",
  description:
    "Learn why DevByteTools exists, how it is built, and who created it.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About DevByteTools</h1>

      <p className="text-lg text-gray-700 mb-8">
        DevByteTools is a collection of fast, practical, and privacy-first
        developer utilities designed to solve everyday problems when working
        with APIs, data, and code.
      </p>

      <Section title="Why DevByteTools Exists">
        <p>
          Many developer tools today are slow, bloated, filled with ads, or
          locked behind logins. DevByteTools was created to provide tools that
          are instant, focused, and respectful of developers’ time and data.
        </p>
      </Section>

      <Section title="What Makes It Different">
        <ul className="list-disc pl-6 space-y-2">
          <li>Fast by design</li>
          <li>Privacy-first — data stays in your browser</li>
          <li>Built from real development workflows</li>
          <li>No unnecessary features or clutter</li>
        </ul>
      </Section>

      <Section title="How It Is Built">
        <p>
          DevByteTools is built using modern web technologies with a focus on
          performance, accessibility, and maintainability. Each tool is designed
          to do one thing well.
        </p>
      </Section>

      <Section title="About the Creator">
        <p>
          DevByteTools is created and maintained by{" "}
          <strong>Prateek Mondal</strong>, a self-taught full-stack developer and
          technical writer who enjoys building practical software and sharing
          real-world knowledge.
        </p>
      </Section>

      <Section title="Feedback & Roadmap">
        <p>
          This project is actively evolving. Feature requests, bug reports, and
          suggestions are always welcome. DevByteTools will always maintain a
          free, no-login core.
        </p>
      </Section>

      <p className="mt-12 text-sm text-gray-500">
        Built with ❤️ by a developer — focused on speed, simplicity, and trust.
      </p>
    </main>
  );
}

/* ---------- COMPONENT ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
