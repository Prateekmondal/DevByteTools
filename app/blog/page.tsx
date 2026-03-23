import Link from "next/link";

export const metadata = {
  title: "Developer Guides & Tutorials – DevByteTools",
  description:
    "Practical guides and tutorials for working with APIs, JSON, timestamps, and developer tools.",
};

const posts = [
  {
    title: "How to Convert API JSON to CSV",
    description:
      "Learn how to transform JSON API responses into CSV format for spreadsheets and analytics.",
    slug: "json-to-csv-guide",
    date: "2025-01-10",
  },
  {
    title: "Understanding JWT Tokens",
    description:
      "A practical explanation of JSON Web Tokens, their structure, and common use cases.",
    slug: "understanding-jwt",
    date: "2025-01-12",
  },
  {
    title: "Unix Timestamps Explained",
    description:
      "What Unix timestamps are, why they exist, and how to convert them correctly.",
    slug: "unix-timestamp-explained",
    date: "2025-01-15",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Developer Guides & Tutorials
      </h1>

      <p className="text-lg text-gray-700 mb-12">
        Practical articles that explain when and how to use developer tools —
        written from real-world experience.
      </p>

      {/* POSTS LIST */}
      <section className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border p-6 hover:border-sky-400"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-sky-600"
              >
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-600 mb-3">
              {post.description}
            </p>

            <div className="text-sm text-gray-500">
              Published on {post.date}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
