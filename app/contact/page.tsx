export const metadata = {
  title: "Contact – DevByteTools",
  description:
    "Get in touch with DevByteTools for feedback, tool requests, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-lg text-gray-700 mb-8">
        Have feedback, a tool request, or found an issue?  
        I’d love to hear from you.
      </p>

      {/* CONTACT OPTIONS */}
      <section className="space-y-6">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Tool Requests</h2>
          <p className="text-gray-600">
            If there’s a developer tool you wish existed, feel free to suggest
            it. Practical ideas are always welcome.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Bug Reports</h2>
          <p className="text-gray-600">
            Found something not working as expected? Please include the tool
            name and a short description of the issue.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold mb-2">General Contact</h2>
          <p className="text-gray-600">
            You can reach out directly via email:
          </p>

          <p className="mt-2 font-medium">
            📧{" "}
            <a
              href="mailto:prateekmondal@gmail.com"
              className="text-sky-600 hover:underline"
            >
              prateekmondal@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* TRUST NOTE */}
      <p className="mt-12 text-sm text-gray-500">
        DevByteTools respects your privacy. No tracking. No automated spam
        replies.
      </p>
    </main>
  );
}
