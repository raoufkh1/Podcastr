import PodcastCard from '@/components/podcastCard'
import { Button } from '@/components/ui/button'
import { podcastData } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-xl font-bold text-white-1'>Trending Podcasts</h1>
        <div className='podcast_grid'>

          {podcastData.map(({title, imgURL, id, description})  => 
          <PodcastCard 
            key={id}
            imgURL={imgURL}
            title={title}
            description={description}
            id={id}
          />
          )}
        </div>
      </section>
    </div>
  )
}

export default Home