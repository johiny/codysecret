import Image from 'next/image'
import angryCody from "@/Media/angry_Cody.png"
import unlock from "@/Media/unlock.svg"

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-2 font-roboto gap-8`}>
      <h1 className='text-retroblue font-roboto text-6xl font-bold '>¿Quieres entrar a mi sala secreta?</h1>
      <Image src={angryCody} alt="angry cody" width={500} height={500} />
      <h1 className='text-retroblue font-roboto text-6xl font-bold '>¡Dime quien eres!</h1>
      <Image src={unlock} alt="unlock" width={80} height={80} className='hover:cursor-pointer hover:animate-spin yellowFilter'/>
    </main>
  )
}
