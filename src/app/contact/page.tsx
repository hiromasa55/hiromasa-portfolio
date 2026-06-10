"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent
  ) => {
    e.preventDefault();

    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
    setSuccess(true);

    setName("");
    setEmail("");
    setMessage("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Contact
      </h1>

      <p className="text-center text-gray-600 mb-10">
        ご質問などがございましたら、お気軽にお問い合わせください。
      </p>

      {success && (
        <p className="text-green-600 text-center">
          お問い合わせを送信しました！
        </p>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e => setMessage(e.target.value))}
            placeholder="お問い合わせ内容をご記入ください"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          disabled={
          !name.trim() ||
          !email.trim() ||
          !message.trim()
          }
          className={`w-full rounded-lg bg-black text-white py-3 font-semibold transition
            ${
              !name.trim() ||
              !email.trim() ||
              !message.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-80"
            }
          `}
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