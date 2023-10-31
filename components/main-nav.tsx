import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Logo from '@/public/products/logotenzity.jpeg'
import Image from "next/image"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={Logo} alt="Logo" className='h-10 w-10 rounded-full' />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
