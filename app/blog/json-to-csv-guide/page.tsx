import { notFound } from "next/navigation";
import { JSX } from "react/jsx-dev-runtime";

type Post = {
  title: string;
  description: string;
  date: string;
  content: JSX.Element;
};

const posts: Record<string, Post> = {
  "json-to-csv-guide": {
    title: "How to Convert API JSON to CSV",
    description:
      "Learn how to convert API JSON responses into CSV format using tools, scripts, and best practices.",
    date: "2025-01-10",
    content: <JsonToCsvContent />,
  },
};

console.log(posts);


export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-gray-500 mb-8">
          Published on {post.date}
        </p>

        <div className="prose prose-slate max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  );
}

/* CONTENT COMPONENT BELOW */
function JsonToCsvContent() {
  return (
    <>
      <p>
        APIs usually return data in <strong>JSON format</strong>, which is
        perfect for applications — but not always ideal for humans, spreadsheets,
        or analytics tools.
      </p>

      <p>
        If you’ve ever needed to analyze API data in Excel, Google Sheets, or a
        BI tool, converting <strong>JSON to CSV</strong> becomes essential.
      </p>

      <p>
        In this guide, you’ll learn <strong>multiple practical ways</strong> to
        convert API JSON responses into CSV — from quick tools to scripting
        approaches.
      </p>

      <h2>What Is JSON and Why Convert It to CSV?</h2>

      <p>
        <strong>JSON (JavaScript Object Notation)</strong> is a structured,
        hierarchical data format commonly used by APIs.
      </p>

      <p>
        <strong>CSV (Comma-Separated Values)</strong> is a flat, tabular format
        supported by spreadsheets, databases, and analytics platforms.
      </p>

      <p>
        You should convert JSON to CSV when you need:
      </p>

      <ul>
        <li>Spreadsheet analysis</li>
        <li>Reporting or visualization</li>
        <li>Data sharing with non-developers</li>
        <li>Bulk imports into tools or databases</li>
      </ul>

      <h2>Example API JSON Response</h2>

      <p>Here’s a typical API response:</p>

      <pre>
        <code>
{`[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "active": true
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "active": false
  }
]`}
        </code>
      </pre>

      <h2>Method 1: Convert JSON to CSV Using an Online Tool</h2>

      <p>
        The fastest way to convert JSON is using an online converter — especially
        for small or one-time tasks.
      </p>

      <p>
        With a JSON to CSV tool, you simply:
      </p>

      <ol>
        <li>Paste your API JSON</li>
        <li>Click convert</li>
        <li>Download the CSV</li>
      </ol>

      <p>
        This method is ideal when:
      </p>

      <ul>
        <li>You don’t want to write code</li>
        <li>You need instant results</li>
        <li>Data is non-sensitive</li>
      </ul>

      <p>
        👉 <strong>Tip:</strong> Choose tools that work locally in your browser
        and don’t upload your data.
      </p>

      <h2>Method 2: Convert JSON to CSV Using JavaScript</h2>

      <p>
        If you’re working programmatically, JavaScript offers a simple way to
        transform JSON into CSV.
      </p>

      <pre>
        <code>
{`const json = [
  { id: 1, name: "Alice", email: "alice@example.com", active: true },
  { id: 2, name: "Bob", email: "bob@example.com", active: false }
];

const headers = Object.keys(json[0]);
const csv = [
  headers.join(","),
  ...json.map(row =>
    headers.map(field => JSON.stringify(row[field] ?? "")).join(",")
  )
].join("\\n");

console.log(csv);`}
        </code>
      </pre>

      <p>
        This approach is best when:
      </p>

      <ul>
        <li>You’re already processing API data</li>
        <li>You want automation</li>
        <li>You’re building a backend or script</li>
      </ul>

      <h2>Method 3: Convert JSON to CSV Using Python</h2>

      <p>
        Python is excellent for handling API data and exporting CSV files.
      </p>

      <pre>
        <code>
{`import csv

data = [
  {"id": 1, "name": "Alice", "email": "alice@example.com", "active": True},
  {"id": 2, "name": "Bob", "email": "bob@example.com", "active": False}
]

with open("output.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=data[0].keys())
    writer.writeheader()
    writer.writerows(data)`}
        </code>
      </pre>

      <p>
        Python is ideal for:
      </p>

      <ul>
        <li>Large datasets</li>
        <li>Scheduled exports</li>
        <li>Backend data pipelines</li>
      </ul>

      <h2>Handling Nested JSON</h2>

      <p>
        APIs often return <strong>nested objects</strong>. CSV does not support
        nesting, so you must flatten the data.
      </p>

      <p>
        Common strategies include:
      </p>

      <ul>
        <li>Flattening nested keys (dot notation)</li>
        <li>Extracting only required fields</li>
        <li>Converting nested objects to JSON strings</li>
      </ul>

      <p>
        For complex APIs, using a dedicated JSON-to-CSV tool saves time and
        avoids errors.
      </p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li>Ignoring inconsistent object keys</li>
        <li>Not escaping commas or quotes</li>
        <li>Assuming JSON order matters</li>
        <li>Uploading sensitive API data to unknown tools</li>
      </ul>

      <h2>Which Method Should You Choose?</h2>

      <table>
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Best Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quick conversion</td>
            <td>Online Tool</td>
          </tr>
          <tr>
            <td>Frontend apps</td>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>Backend processing</td>
            <td>Python</td>
          </tr>
        </tbody>
      </table>

      <h2>Final Thoughts</h2>

      <p>
        Converting API JSON to CSV is a common task — and choosing the right
        method depends on your workflow, data size, and privacy needs.
      </p>

      <p>
        Whether you prefer a fast browser-based tool or a scriptable solution,
        understanding the process helps you avoid mistakes and save time.
      </p>

      <p>
        DevByteTools focuses on <strong>fast, privacy-first developer tools</strong>
        that make tasks like this effortless.
      </p>
    </>
  );
}

