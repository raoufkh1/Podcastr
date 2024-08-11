import Image from 'next/image'
import React from 'react'

const PodcastCard = ({title, imgURL, id, description}: {title: string, imgURL:string, id:number, description:string}) => {
  return (
    <div>
        <figure className='cursor-pointer'>
            <Image alt={title} src={imgURL} 
            width={175} height={175} className='aspect-square rounded-xl size-fit w-full' />
            <div className='flex flex-col'>
                <h1 className='text-[16px] truncate font-bold text-white-1'>{title}</h1>
                <h1 className='text-sm truncate font-light capitalize text-white-4'>{description}</h1>
            </div>
        </figure>

    </div>
  )
}

export default PodcastCard