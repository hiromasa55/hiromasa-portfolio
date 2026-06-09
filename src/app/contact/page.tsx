export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Contact
      </h1>

      <p className="text-center text-gray-600 mb-10">
        ご質問などがございましたら、お気軽にお問い合わせください。
      </p>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
          >
            お名前
          </label>
          <input
            id="name"
            type="text"
            placeholder="山田 太郎"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
          >
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="お問い合わせ内容をご記入ください"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black text-white py-3 font-semibold hover:opacity-80 transition"
        >
          送信する
        </button>
      </form>
      <div className="mt-12 text-center">
        <p>Email: masamasap55@example.com</p>
        <p>GitHub: https://github.com/hiromasa55</p>
      </div>
    </div>
  );
}