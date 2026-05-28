import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200">
      <div className="p-4 flex justify-center gap-12 font-bold">
        <Link href="/" className="transition-colors duration-300 hover:text-red-500">HOME</Link>
        <Link href="/profile" className="transition-colors duration-300 hover:text-red-500">PROFILE</Link>
        <Link href="/works" className="transition-colors duration-300 hover:text-red-500">WORKS</Link>
        <Link href="/contacts" className="transition-colors duration-300 hover:text-red-500">CONTACTS</Link>
      </div>
    </header>
  );
}