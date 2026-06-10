export async function POST(req: Request) {
  const { name, email, message } =
    await req.json();

  if (!name || !email || !message) {
    return Response.json(
      { message: "入力内容が不正です" },
      { status: 400 }
    );
  }

  await fetch(
    process.env.DISCORD_WEBHOOK_URL!,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
      content:
        `📩 お問い合わせ

        👤 名前: ${name}

        📧 メール:
        ${email}

        💬 内容:
        ${message}`
      }),
    }
  );

  return Response.json({
    message: "送信成功",
  });
}