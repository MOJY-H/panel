import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col gap-5 h-screen place-content-center'>
      <Link className='text-center text-xl bg-primary-foreground hover:bg-primary hover:text-primary-foreground' href="#"></Link>
      <h2 className='text-center text-8xl'>Not Found</h2>
      <p className='text-center text-2xl'>Could not find requested resource</p>
      <div className=' w-40 text-center flex place-self-center'>
        <Link className='text-center rounded-2xl text-xl py-2 px-4 bg-primary-foreground hover:bg-primary hover:text-primary-foreground' href="/">Return Home</Link>
      </div>
    </div>
  )
}