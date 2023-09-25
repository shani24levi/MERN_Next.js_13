import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Next13</p>
      </Link>
    </nav>
  )
}
