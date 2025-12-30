import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        {/* BRAND */}
        <div>
            <div className="flex items-center">
                <img className="mr-2" src="/logo.png" width="50"/>
                <h3 className="font-semibold text-lg">
                    DevByte<span className="text-sky-500">Tools</span>
                </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                Practical developer tools for APIs, data, and code.
            </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tools/developer-tools/api-data" className="text-gray-600 hover:text-black">
                Developer Tools
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-black">
                Guides & Tutorials
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-black">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* TRUST */}
        <div>
          <h4 className="font-semibold mb-3">Trust</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>No login required</li>
            <li>Privacy-first tools</li>
            <li>Built by a developer</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DevByteTools · Built with ❤️ by a developer
      </div>
    </footer>
  );
}
