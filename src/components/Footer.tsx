import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-700 text-white py-8">
      <nav>
        <ul>
          <div className="flex justify-center gap-10 font-semibold">
            <li><Link href="/" className="transition-colors duration-300 hover:text-red-400">HOME</Link></li>
            <li><Link href="/profile" className="transition-colors duration-300 hover:text-red-400">PROFILE</Link></li>
            <li><Link href="/works" className="transition-colors duration-300 hover:text-red-400">WORKS</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-red-400">CONTACTS</Link></li>
          </div>
        </ul>
      </nav>
      <p className="text-center text-gray-400 mt-6">
        <small>
        © 2026 Hiromasa Portfolio
        </small>
      </p>
      
    </footer>
  );
}