import React from 'react'
import TrendingCard from './TrendingCard'
import trendingData from '../data/trendingData.json'

import WhoToFollowCard from './WhoToFollowCard'
import tweetData from "../data/tweets.json"

const ExploreBar = () => {

  const trending = trendingData.map((item) => {
    return <TrendingCard key={item.id} data={item}/>
  })

  const whoToFollow = tweetData.map((item) => {
    return <WhoToFollowCard key={item.id} userData={item}/>
  })

  return (
    <div className='flex flex-col bg-white w-1/3 px-6 overflow-scroll'>
        <div className='flex flex-row bg-slate-100 rounded-full mt-2 p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
 
    <input type="text" placeholder='search' className='bg-transparent w-full focus:ring-0 outline-none' />
        </div>
        <div className=' flex flex-col bg-slate-100 rounded-2xl my-3 h-fit'>
            <p className='font-black p-3 text-lg hover:underline cursor-pointer'>What's Happening</p>
            {trending}
          
            <p className='font-normal text-blue-600 hover:font-semibold cursor-pointer text-lg p-3'>Show more</p>
        </div>

        <div className=' flex flex-col bg-slate-100 rounded-2xl my-3 h-fit'>
            <p className='font-black p-3 text-lg'>Who to Follow</p>
            {/* whotofollowcard */}
           {whoToFollow}
          
            <p className='font-normal text-blue-600 hover:font-semibold cursor-pointer text-lg p-3'>Show more</p>
        </div>

        <p>copyright S.A Twitter.inc</p>
    </div>
  )
}

export default ExploreBar