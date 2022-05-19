import Image from 'next/image'
import Link from 'next/link'
import GreenMindsLogo from '../../public/GreenMinds.png'

const Navbar = () => {
  return (
    <nav className='w-full relative px-12 mx-auto py-8'>
      <div className='container flex justify-between px-8 py-4 mx-auto bg-[#2d6a4f] rounded-lg shadow-lg'>
        <Image src={GreenMindsLogo} alt='GreenMinds' height={50} width={50} />

        <div className='hidden sm:flex space-x-8 items-center'>
          <Link href='/signup'>
            <a className='bg-green-200 hover:bg-green-200/50 text-green-900 font-medium px-4 py-2 rounded-md'>
              Sign Up
            </a>
          </Link>
          <Link href='/signin'>
            <a className='bg-green-200 hover:bg-green-200/50 text-green-900 font-medium px-4 py-2 rounded-md'>
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
