import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 text-black">
      <nav>
        <ul>
          <div className="p-4 flex justify-center gap-12 font-bold">
            <li><Link href="/" className="transition-colors duration-300 hover:text-red-500">HOME</Link></li>
            <li><Link href="/profile" className="transition-colors duration-300 hover:text-red-500">PROFILE</Link></li>
            <li><Link href="/works" className="transition-colors duration-300 hover:text-red-500">WORKS</Link></li>
            <li><Link href="/contacts" className="transition-colors duration-300 hover:text-red-500">CONTACTS</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
}