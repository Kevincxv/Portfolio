import React from 'react';
import { CircularTextt } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-[-40px] bottom-[-60px] md:hidden
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto absolute
    
    '>
      <div className="w-80 h-auto flex items-center justify-center relative md:w-41">
      <CircularTextt className={"fill-dark animate-spin-slow dark:fill-light"} />


<Link href="mailto:kennethcxv@gmail.com" className='flex items-center justify-center absolute left-1/3.5 top-1/2 -translate -x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[100px] h-[100px] rounded-full font-semibold hover:bg-light hover:text-dark

dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
hover:dark:border-light
md:hidden md:text-hidden
'>
    Hire Me
</Link>
      </div>
    </div>
  );
};

export default HireMe;
