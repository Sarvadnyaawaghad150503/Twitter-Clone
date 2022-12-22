import React from 'react'

const NotificationTab = () => {
  return (
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
      m-10
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">All</a>
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
      aria-controls="tabs-profile" aria-selected="false">Verified</a>
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
      m-10
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Mentions</a>
  </li>
  
</ul>


    </div>
  )
}

export default NotificationTab