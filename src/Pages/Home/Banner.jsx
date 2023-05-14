import React from 'react';
import style from './Banner.module.css';

const Banner = () => {
  return (
    <div className={style.banner}>
        <div className='container mx-auto h-full'>
        <div className='flex items-center justify-end h-full w-full'>
            <div></div>
            <div className='w-1/2'>
                <h2 className='font-semibold text-4xl mb-3 text-white'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-white mb-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-primary py-3 px-8 rounded-lg text-semibold text-white text-xl'>Learn More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner