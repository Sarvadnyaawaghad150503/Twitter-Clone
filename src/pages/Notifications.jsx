import React from 'react'
import ExploreBar from '../components/ExploreBar'
import Layout from '../components/Layout'
import NotificationFeed from '../components/NotificationFeed'
import Sidebar from '../components/Sidebar'

const Notifications = () => {
  return <Layout title ="Notifications / Twitter">
    <div className='h-screen flex flex-row'>
        <Sidebar/>
        <div className='flex-1'><NotificationFeed/></div>
       <ExploreBar/>
    </div>

    </Layout>;
  
}

export default Notifications