import React from 'react'

const Products = (props) => {
  return (
    <div className='flex flex-row sm:flex-col h-44   sm:h-full  my-2 text-sm sm:text-base md:text-lg lg:text-xl sm:w-1/2 lg:w-1/3 sm:px-2 items-center' key={props.id}>
        <div className='w-1/3 sm:w-full sm:h-52 md:h-64 lg:h-80'><img src={props.src} alt='E-Bazaar' className="w-full h-full " /></div>
        <div className='w-2/3 sm:w-full flex-col flex-wrap px-1 '>
            <p><b>{props.name}</b></p>
            <p> Ratings <i>{props.rating}</i> out of 5</p>
            <p>Given by <i>{props.rates}</i> users</p>
            <p className='text-2xl'>${props.price}{props.key}</p>
            <p className='text-sm'><button onClick={props.func} className="bg-slate-300 p-2 rounded-lg hover:bg-slate-400">pick item</button></p>
        </div>
    </div>
  )
}

export default Products