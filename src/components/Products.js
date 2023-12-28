import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  console.log(products)
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
                shopping everyday 
            </h1>
            <span className='w-20 h-[3px] bg-black '></span>
            <p className='max-w-[700px] text-gray-600 text-xenter'>
                Aliquip cillum qui enim adipisicing aliqua aliqua. Cillum sunt tempor consectetur non exercitation. Quis pariatur et consequat labore eu enim qui et consectetur. Enim exercitation enim exercitation sint ea. Fugiat magna nostrud tempor minim exercitation minim ex velit sit deserunt culpa qui eu consequat. Adipisicing minim veniam culpa elit amet sunt adipisicing officia ipsum incididunt ut exercitation ipsum nulla. Laborum enim qui laborum qui nostrud cupidatat.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto'> 
          <ProductsCard/>
        </div>
      
    </div>
  )
}

export default Products
