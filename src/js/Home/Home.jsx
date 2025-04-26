import React from 'react'
import myImg from "../../assets/myImg.png"
import { FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5'
import { FiMail } from 'react-icons/fi'
import myFile from '../../assets/ajithResume.pdf'; 
export default function Home() {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = myFile; // relative to public/
      link.download = 'ajithResume.pdf'; // the filename for saving
      link.click();
    };
    

   return (
      <div id='HOME' className='bg-LightPrimary pt-10 pb-15'>

         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
            <div className='flex flex-col-reverse sm:flex-row '>
               <div className='flex flex-1 flex-col   justify-center'>
                  <p className='font-light   text-lg text-textLightPrimary'>Hello, I am</p>
                  <p className='font-bold text-5xl mt-1'>Ajith Chandrasekar</p>

                  <div className='flex mt-5'>
                     <div className='border-y py-2 border-borderPrimary pr-5'>
                        <p className='font-light   text-lg text-textLightPrimary'>Sr.React Native Developer</p>
                     </div>
                  </div>
                  <div className='flex gap-5 mt-5'>
                     <a href='https://www.linkedin.com/in/ajith-sekar-666118173' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn className='text-textLightPrimary text-xl' />
                     </a>
                     <a href='https://wa.me/8870918732' target='_blank' rel='noopener noreferrer'>
                        <IoLogoWhatsapp className='text-textLightPrimary text-xl' />
                     </a>
                     <a href='https://www.instagram.com/aji_a_j_i_t_h' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className='text-textLightPrimary text-xl' />
                     </a>
                     <a href='mailto:cpaaji1@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FiMail className='text-textLightPrimary text-xl' />
                     </a>
                  </div>


                  <div className='mt-7'>
                     <button  onClick={handleDownload}  className='border-2 px-10 py-2 rounded-4xl flex items-center bg-LightSecondary'>
                        <p className='font-light text-base  text-black'>View My Resume</p>
                        <FaArrowRight className='pl-2 text-xl' />
                     </button>
                  </div>

               </div>

               <div className=' border-borderPrimary rounded-2xl flex flex-1 justify-center items-center sm:mb-0 mb-5'>
                  {/* <img src={myImg} className='w-100 h-100 md:w-full md:h-full' /> */}
                  <img src={myImg} className='h-90 lg:h-140 ' />
               </div>

            </div>
         </div>
      </div>

   )
}
