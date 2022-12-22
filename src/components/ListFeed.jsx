import React from 'react'

const ListFeed = () => {
  return (
    <div>

<div className='flex-1 bg-white border-x-2 border-b-2' >
             <div className='flex flex-row p-3 justify-between'> {/*border-b-2 (removed this from div tag) */} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 rounded-full cursor-pointer hover:bg-slate-400">
  <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
</svg>

                <h1 className='text-xl font-bold ml-7 hover:underline'>Lists</h1>
               
               <div className='flex flex-row ' >
                <div className='flex-1 px-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg>
</div>
<div className='flex px-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</div>
</div>

                </div>
                </div>

<div className='border-b-2'>
<h1 className='text-xl font-bold ml-7 mt-5 mb-10'>Pinned Lists</h1>

<p className='mx-10 mb-5 text-slate-500'>
Nothing to see here yet — pin your favorite Lists to access them quickly.
</p>
</div>

<div >
<h1 className='text-xl font-bold ml-7 mt-5 mb-10'>Your List</h1>

<p className='mx-10 mb-5 text-slate-500'>
You haven't created or followed any Lists. When you do, they'll show up here.
</p>
</div>

    </div>
  )
}

export default ListFeed