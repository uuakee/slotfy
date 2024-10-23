import Image from 'next/image'

export default function Actions() {
  return (
    <div className="fixed flex flex-col gap-2 bottom right-4">
      <Image
        src="/llfk1725953225532272.jpg"
        alt=""
        width={48} // Altere o tamanho conforme necessário
        height={48}
        className=""
      />
      <Image
        src="/media_telegram.png"
        alt=""
        width={48} // Altere o tamanho conforme necessário
        height={48}
        className=""
      />
    </div>
  )
}
