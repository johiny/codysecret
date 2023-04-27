import Image from "next/image"
import big_cody from "@/Media/big_cody.png"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"
import type { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { useEffect } from "react"

const Secret = ({session} : {session: Session}) => {

  return (
    <div className='flex min-h-screen flex-col justify-items-start items-center '>
       <h1 className='text-retroblue font-roboto text-6xl font-bold text-center z-10 leading-loose mt-10 animate-puffInTop delay-100'>A wey me hubieras dicho que eras tu {session?.user?.name || "paco"}<br/>
       Bueno mi screto es... un chiste!<br/>
       ¿Sabes por qué el cocodrilo programador no usa Windows?<br/> ¡Porque prefiere &quot;crocodear&quot; en Linux!</h1>
       <button className="bg-retroblue text-white font-roboto w-2/12 font-bold text-2xl p-2 mt-10 rounded-md animate-puffInTop delay-200 hover:bg-opacity-90" onClick={() => signOut()}>Salir de la sala secreta</button>
      <Image src={big_cody} height={500} width={500} alt="big_cody" className="absolute bottom-0 left-0 animate-puffInTop"/>
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  else{
    return{
      props:{
        session
      }
    }
  }
}

export default Secret