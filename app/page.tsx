import Image from 'next/image'
import Landing from './components/Landing'

export default function Home() {
  return (
    <main>
      <Landing />
      <div className='bg-green-200 h-screen pt-24 flex justify-center'>Home</div>
    </main>
  )
}
