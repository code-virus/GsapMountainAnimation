import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Page2 from './Page2'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const  Home=()=> {
  useGSAP(()=>{
    let tl =gsap.timeline({scrollTrigger:{
      scroll:"body",
      trigger:".page1",
      markers:true,
      start:"0% 0%",
      end:"-10% -20%",
      pin:true,
      scrub:5

    }})
    tl.to(".right",{
      right:"-30vw",
      duration:5
    },"same")
    tl.to(".left",{
      left:"-30vw",
      duration:5
    },"same")
    tl.to(".mountain",{
      letterSpacing:"10px",
      left:'25%',
      duration:5
    },"same")
    tl.to(".mountain",{
      top:"43vw",
      fontSize:"7vw",
      left:"35vw",
      
      
    })

  })

  
  return (
    <>   
     <div className='w-full h-[100vh] bg-red-500 flex flex-col justify-center page1 overflow-hidden'>
            <img className='absolute right-[0vw] w-[100vw] bottom-[-14.7vw] z-20 right' src="https://www.pngall.com/wp-content/uploads/2016/06/Mountain-Transparent.png" alt="" />
            <img src="https://images.unsplash.com/photo-1519077843978-bef162652275?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='absolute mountain left-[30%] top-[15vw] text-[10vw] uppercase text-white z-10  tracking-[-30px]'>mountain</h1>
            <img className=' left absolute w-[100vw]  bottom-[-14.7vw] z-2' src="/moutain.png" alt="" />
    </div>
    <Page2 />
    </>

  )
}

export default Home