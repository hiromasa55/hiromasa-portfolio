import Link from "next/link";
import Image from "next/image";

export default function Works() {
  const works = [
  {
    title: "ポートフォリオサイト",
    description: "Next.jsで制作した個人ポートフォリオ",
    tech: ["Next.js ", "TypeScript ", "Tailwind CSS "],
    github: "#",
    image: "/self-portrait.png",
    href: "/",
  },
  {
    title: "チーム開発:2Dアクションゲーム",
    description: "サークルでチームリーダーとして開発した2Dゲーム",
    tech: ["Unity(C#)"],
    github: "#",
    image: "/w-dashing.png",
    href: "/",
  },
  {
    title: "個人開発ゲーム:1vs1の決闘型2Dアクション",
    description: "王になるため、棒人間が動物の帝王を倒していく",
    tech: ["Scratch"],
    github: "#",
    image: "/w-duel.png",
    href: "/",
  },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        WORKS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work) => (
          <Link
            key={work.title}
            href={work.href}
            className="border rounded-xl overflow-hidden shadow-lg
                        transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={300}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-bold">
                {work.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {work.description}
              </p>
              <p className="mt-1 text-gray-600 border-t">
                使用技術:<strong className="text-gray-800">{work.tech}</strong>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}