import Image from 'next/image'
import Link from 'next/link'
import { Menu, User, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className=" text-white h-[3rem] flex items-center justify-between">
      <Button variant="new" size="icon" className="text-white rounded-full bg-[#752b9c39] mr-2">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
      
      <Link href="/" className="flex-grow flex justify-left">
        <Image
          src="/logo.png"
          alt="777g.com"
          width={100}
          height={40}
          className="max-h-10 w-auto"
        />
      </Link>
      
      <div className="flex items-center space-x-2">
        <Button variant="new" size="icon" className="bg-[#752b9c39] rounded-full text-white">
          <Image src="/0204_bell_lan.png" alt="User" width={22} height={22} />
          <span className="sr-only">Promoções</span>
        </Button>

        <Button variant="new" size="icon" className="bg-[#752b9c39] rounded-full text-white">
          <Image src="/vr-headset-futuristic.png" alt="User" width={24} height={24} />
          <span className="sr-only">Suporte</span>
        </Button>
      </div>
    </header>
  )
}