import Image from "next/image";

export default function Home() {
  return (
    <section className="relative h-screen">

      {/* 背景画像 */}
      <Image
        src="/myself_mainpicture.JPG"
        alt="戸塚博理"
        fill
        priority
        className="object-cover"
      />

      {/* 黒いオーバーレイ */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl" />

      {/* テキスト */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">

        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{textShadow: "0 2px 10px rgba(0,0,0,0.8)"}}>
          戸塚 博理
        </h1>

        <p className="text-xl md:text-3xl mb-8">
          Information Engineering Student
        </p>

        <p className="max-w-3xl text-center text-2xl leading-relaxed" style={{textShadow: "0 2px 10px rgba(0,0,0,0.8)"}}>
          <strong className="text-3xl font-bold mb-2">「分からないを分かるまで追求する」を大切に。</strong><br />
          群馬県出身。情報分野を学ぶため福島へ進学。
          Web開発やゲーム開発に取り組んでいます。
        </p>

      </div>
    </section>
  );
}