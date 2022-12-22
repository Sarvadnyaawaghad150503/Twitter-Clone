import React from 'react'

const ProfileInfo = (props) => {
    const{coverPhoto, avatar,bio,location,website,dob,followersCount,followingCount,handle,fullname,joined} = props.profile;

  return (

    
    <div className='border-b-2 '>

<div className='flex-1 bg-white border-x-2 ' >
             <div className='flex flex-row p-3  '> {/*border-b-2 (removed this from div tag) */} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 rounded-full cursor-pointer hover:bg-slate-400">
  <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
</svg>
<div className='flex flex-col'>
                <h1 className='text-2xl font-bold ml-7 hover:underline '>Sarvadnya Awaghad</h1>
               <p className='mx-8 text-slate-500'>100 tweets</p>
               </div>
                </div>
                </div>

        <div className='relative'>
            <img className='h-full' src={coverPhoto} alt="cover" />

            <img className='w-32 absolute top-60 rounded-full left-5' src={avatar} alt="profile" />
        </div>

<div className='flex flex-1 justify-between'>
       
        <div className='mt-10 mx-3  '>
            <span className='flex flex-row font-bold text-2xl  '>{fullname} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
</span>
            <span>@{handle}</span>
        </div>

        <div >
            <button className='flex flex-col p-3 hover:bg-slate-200 rounded-full cursor-pointer border-b-2 m-5 font-bold'>Edit Profile</button>
        </div>
    </div>
        <div className='m-3'>
            <p className='text-lg'>{bio}</p>

            <section className='mt-3'>
                <div className=' flex flex-row mb-2'>
                    <article className='flex flex-row text-slate-600 mr-6'>
                        <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</div>
                        <div>{location}</div>
                    </article>

                    <article className='flex flex-row text-slate-600'>
                        <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>

</div>
                        <a className='text-blue-500 hover:underline' href={website}>{website}</a>
                    </article>
                </div>


                <div className=' flex flex-row '>
                    <article className='flex flex-row text-slate-600 mr-6'>
                        <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
</svg>

</div>
                        <div>{dob}</div>
                    </article>

                    <article className='flex flex-row text-slate-600'>
                        <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


</div>
                        <div>{joined}</div>
                    </article>
                </div>
            </section>
            <section className='flex flex-row mt-3'>
                <div className='mr-5'>
                    <span className='font-bold'>{followingCount}</span> Following
                </div>
                <div ><span className='font-bold'>{followersCount}</span> Followers</div>
            </section>
        </div>


        <div>
        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-between" id="tabs-tab"
  role="tablist">
  <li class="nav-item" role="presentation">
    <a href="#tabs-home" class="
      nav-link
      block
      font-bold
      text-md
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">Tweets</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile" class="
      nav-link
      block
      font-bold
      text-md
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Tweets & Replies</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages" class="
      nav-link
      block
      font-bold
      text-md
      leading-tight
     
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Media</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-contact" class="
      nav-link
     
      block
      font-bold
      text-md
      
      
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
      aria-controls="tabs-contact" aria-selected="false">Likes</a>
  </li>
</ul>


    </div>



    </div>
  )
}

export default ProfileInfo