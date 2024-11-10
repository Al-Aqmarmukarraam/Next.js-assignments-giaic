import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";

const Contact =() => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">CONNECT WITH ME</h2>
                <p className='text- to-blue-950 text-[18px] pt-2' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    Shoot me an email/text if you're interested.
                    </p>
                    <div className='flex gap-3 items-center'data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <RiMailSendFill size={30} /> pqr@gmail.com
                    </div>
                    <div className='flex gap-3 items-center' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <BsTelephoneForward size={30} /> (021) 444-6666
                   </div>
            </div>
            <div className='space-y-8' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">NAME</label>
                    <input type="text"
                    className='h-[40-px] bg-transparent border border-x-navy to-blue-900'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <label htmlFor='msg'>MESSAGE</label>
                    <textarea
                    className='h-[40-px] bg-transparent border border-x-navy to-blue-900'
                    id='msg' rows={6}>
                    </textarea>
                </div>
               <button className='bg-blue-50 p-2 px-6' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">SEND!</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
