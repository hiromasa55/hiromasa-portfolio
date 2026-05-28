import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100 flex gap-9 font-bold">
      <Link href="/" className="transition-colors duration-300 hover:text-red-500">HOME</Link>
      <Link href="/profile" className="transition-colors duration-300 hover:text-red-500">PROFILE</Link>
      <Link href="/works" className="transition-colors duration-300 hover:text-red-500">WORKS</Link>
      <Link href="/contacts" className="transition-colors duration-300 hover:text-red-500">CONTACTS</Link>
    </header>
  );
}