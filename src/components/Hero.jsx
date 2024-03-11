import { motion } from 'framer-motion';
import revaImage from '../assets/Photo_Reva.png';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inse-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#7da0cd]' />
          <div className='w-1 sm:h-80 h-40' style={{ background: '#7da0cd' }} />
        </div>

        <div className="flex flex-col items-center sm:flex-row">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className='text-[#7da0cd]'>Reva</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Web Enthusiast | <br className='sm:block hidden' /> A creative thinker dedicated to <br className='sm:block hidden' />  building digital solutions that make a difference
            </p>
          </div>
          <div className="sm:hidden mt-3">
            <img src={revaImage} alt="Reva's Image" className="mb-10 ml-0 mr-5 w-[270px] h-[370px]" />
          </div>
        </div>
        <div className="hidden sm:block mt-3  p-48">
          <img src={revaImage} alt="Reva's Image" className="w-90 h-90" />
        </div>




      </div>


      {/* <ComputersCanvas /> */}
      {/* <img src={revaImage} alt="Reva's Image" className="ml-3 w-100 h-100" /> */}

      <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center mt-14'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>

            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero