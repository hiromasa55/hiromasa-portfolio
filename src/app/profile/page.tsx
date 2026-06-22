import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Hiromasa's Profile
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
        {/* 自己紹介 */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">
            プロフィール
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Image
              src="/drinking_myself.png"
              alt="飲み会の写真"
              width={200}
              height={100}
              className="shrink-0 rounded-lg shadow-lg"
              />
            <p>
              　情報系大学に通う大学生です。
              Webアプリケーション開発やゲーム開発を中心に学習しています。
              Blenderなんかもかじったりしていて、わりと見栄えが良いエンタメ系の技術は積極的に学ぼうとしています。<br/>
              　日本のアニメや漫画が本当に大好きで、その中で見られるクリエイターの魂や思いなんかを感じると
              嬉しくなっちゃって悶えます。そんなクリエイターに自分も日々近づけるよう頑張りたいなと思う今日このごろです。
              最近はイラスト制作が滅茶苦茶楽しい。
            </p>
          </div>
        </section>

        {/* 基本情報 */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">
            基本情報
          </h2>

          <div className="space-y-2">
            <p><strong>名前：</strong>戸塚 博理</p>
            <p><strong>所属：</strong>日本大学 工学部 情報工学科</p>
            <p><strong>学年：</strong>3年</p>
            <p><strong>居住地：</strong>福島県</p>
          </div>
        </section>

        {/* スキル */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">
            スキル
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>HTML / CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        {/* 資格 */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">
            資格
          </h2>

          <ul className="list-disc pl-6">
            <li>基本情報技術者試験</li>
          </ul>
        </section>

        {/* 趣味 */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">
            趣味・興味
          </h2>

          <p>
            イラスト制作、ゲーム開発、Webサービス開発、
            UI/UXデザインなどに興味があります。
          </p>
        </section>
      </div>
    </div>
  );
}