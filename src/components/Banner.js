
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://tse3.mm.bing.net/th?id=OIP.IhiqRWFamp-enjV2csKdzwHaE8&pid=Api&P=0&h=220",
        "https://tse4.mm.bing.net/th?id=OIP.bXwLqL90cB495-kOY1ywDQHaEK&pid=Api&P=0&h=220",
        "https://tse3.mm.bing.net/th?id=OIP.nyq071QnaKFx41a7tlUa1wHaE8&pid=Api&P=0&h=220"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 :(prev)=> prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 :(prev)=> prev + 1)
    }
    // console.log(currentSlide);

return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div  style={{transform:`translateX(-${currentSlide*100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover '
                    src={data[0]}
                    alt='ImgOne'
                    loading='prioriti' />
                <img className='w-screen h-full object-cover '
                    src={data[1]}
                    alt='ImgOne'
                    loading='prioriti' />
                <img className='w-screen h-full object-cover '
                    src={data[2]}
                    alt='ImgOne'
                    loading='prioriti' />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><FaArrowLeft /></div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'><FaArrowRight /></div>
            </div>
        </div>
    </div>
);
}

export default Banner;