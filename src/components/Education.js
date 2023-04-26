import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details =({ type,time,place,info }) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                
type="High School"
time="12th Grade |"
place="Doral Academy Prepatory"
info="Doral Academy Charter High School is a highly regarded charter school located in Doral, Florida, offering a comprehensive curriculum to students from grades 9 through 12. The school is known for its strong academic programs, dedicated faculty, and commitment to fostering a nurturing and supportive learning environment. With a focus on college preparation and a range of extracurricular activities, Doral Academy Charter High School provides students with the tools and opportunities needed to succeed in their future endeavors."
/>
<Details
type="College"
time="2.5 years"
place="Doral College | Dual Enrollment"
info="Doral College is an accredited institution of higher learning that specializes in providing innovative educational opportunities to high school students, offering a range of courses designed to help them get ahead in their studies. Having completed 21 classes at Doral College, I have successfully accumulated over 70 credits, showcasing my dedication to education and academic achievement."
                />
                </ul>
            </div>
        </div>
  )
}

export default Education