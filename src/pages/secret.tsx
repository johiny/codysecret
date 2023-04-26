import Image from "next/image"
import big_cody from "@/Media/big_cody.png"
const Secret = () => {
  return (
    <div className='flex min-h-screen flex-col justify-items-start '>
       <h1 className='text-retroblue font-roboto text-6xl font-bold text-center z-10 leading-loose mt-10 animate-puffInTop delay-100'>A wey me hubieras dicho que eras tu paco...<br/>
       Bueno mi screto es... un chiste!<br/>
       ¿Sabes por qué el cocodrilo programador no usa Windows?<br/> ¡Porque prefiere "crocodear" en Linux!</h1>
      <Image src={big_cody} height={500} width={500} alt="big_cody" className="absolute bottom-0 left-0 animate-puffInTop"/>
    </div>
  )
}

export default Secret