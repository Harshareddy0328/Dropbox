import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggle } from './ThemeToggler';

function Header() {
  return (
    <header className='flex items-center justify-between'>
    <Link href="/" className='flex items-center space-x-2'>
        <div className='bg-[#0160FE] w-fit'>
            <Image
            className='invert'
            src="https://www.shareicon.net/data/128x128/2015/11/08/668675_box_512x512.png"
            height={50}
            width={50}
            alt='logo'
            />
        </div>
    <div className='font-bold text-xl'>DropBox</div>
    </Link>
    <div className='px-5 flex space-x-2 items-center'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
        <SignedOut>
            <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
        </SignedOut>
    </div>
    </header>
  )
}

export default Header
