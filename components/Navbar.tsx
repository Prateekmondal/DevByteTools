import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* BRAND */}
        <Link href="/" className="flex items-center text-xl font-bold hover:text-sky-500">
        <img className="mr-2" src="/logo.png" width="50"/>
          DevByte<span className="text-sky-500 hover:text-sky-500">Tools</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/tools/developer-tools/api-data"
            className="text-gray-600 hover:text-sky-600"
          >
            Tools
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-sky-600"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-sky-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-sky-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
