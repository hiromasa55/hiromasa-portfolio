import Image  from "next/image";

export default function Home() {
  return (
    <div className="text-4xl  text-center mt-20 justify-center">
      <h1 className="
        font-bold 
        text-5xl
        ">誰よりも熱い男 戸塚博理</h1>
      <Image src="/self-portrait.png" alt="self-portrait" className="mx-auto my-6" width={600} height={600}/>
      <p className="text-2xl mb-10">生まれも育ちは群馬県<br/>
        群馬県立前橋東高等学校で進路を考え<br />
        思い立って情報の分野を学びに福島へ<br />
        分からないを分かるまで追求する精神を大切に<br />
        趣味のイラスト制作やプログラミングを毎日頑張ります
      </p>
    </div>
  )
}