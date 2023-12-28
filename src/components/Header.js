import React from 'react'
import { cart, logo, acc } from '../asset/index'

const Header = () => {
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div className='w-40'>
                    <img src={logo} alt='logo' />
                </div>
                <div></div>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Shop</li>
                        <li>Element</li>
                        <li>Blog</li>
                    </ul>
                    <div className='relative'>
                        <img  className='w-7' src = {cart}  alt='cart'/>
                        <span className='absolute w-7 top-2 bottom-1 left-0 text-sm flex items-center justify-center font-semibold font-titleFont'>0</span>
                    </div>
                    <img className='w-8 h-8 rounded-full' src={ acc } alt='account'/>
                </div>
            </div>
        </div>
    )
}

export default Header

