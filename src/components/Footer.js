import React from 'react'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md"
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { logolight, payment } from '../asset/index'

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20  font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <img className='w-32 ' src={logolight} alt='logoLight' />
                    <p className='text-white text-sm tracking-wide'>ReactBD.com</p>
                    <img className='w-56' src={payment} alt='payment' />
                    <div className='flex gap-5 text-lg  text-gray-400'>
                        <FaGithub className='hover:text-white duration-300  cursor-pointer' />
                        <FaFacebook className='hover:text-white duration-300  cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300  cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300  cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300  cursor-pointer' />
                    </div>

                </div>



                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                    <div>
                        <p>Xuan Phuong, Nam Tu Liem, HN</p>
                        <p>Phone: 0344959689</p>
                        <p>Email: nguyentthuha.003@gmail.com</p>
                        <p></p>
                    </div>

                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span><BsPersonFill /></span>
                            my account
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span><BsPaypal /></span>
                            checkout
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span><FaHome /></span>
                            order tracking
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span><MdLocationOn /></span>
                            help & support
                        </p>

                    </div>
                </div>

                <div className='flex flex-col  justify-center'>
                    <input
                    className='bg-transparent border px-4 py-2 text-sm' 
                    placeholder='e-mail'
                    type='text' />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subcribe</button>
                </div>


            </div>
        </div>
    )
}

export default Footer
