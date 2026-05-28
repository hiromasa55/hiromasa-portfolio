import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="flex justify-center gap-10 font-semibold">
        <Link href="/" className="transition-colors duration-300 hover:text-red-400">HOME</Link>
        <Link href="/profile" className="transition-colors duration-300 hover:text-red-400">PROFILE</Link>
        <Link href="/works" className="transition-colors duration-300 hover:text-red-400">WORKS</Link>
        <Link href="/contacts" className="transition-colors duration-300 hover:text-red-400">CONTACTS</Link>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
        © 2026 Hiromasa Portfolio
      </p>
    </footer>
  );
}