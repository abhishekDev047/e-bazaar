import React from 'react'

const Products = (props) => {
  return (
    <div className='flex flex-row h-44 border border-black my-2 text-sm' key={props.id}>
        <div className='w-1/3'><img src={props.src} alt='E-Bazaar' className="w-full h-full" /></div>
        <div className='w-2/3 flex-col flex-wrap px-1'>
            <p><b>{props.name}</b></p>
            <p> Ratings <i>{props.rating}</i> out of 5</p>
            <p>Given by <i>{props.rates}</i> users</p>
            <p className='text-lg'>${props.price}{props.key}</p>
            <p className=''><button onClick={props.func}>pick item</button></p>
        </div>
    </div>
  )
}

export default Products