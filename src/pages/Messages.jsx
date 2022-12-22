import React from 'react'
import Layout from '../components/Layout'
import MessageFeed from '../components/MessageFeed'
import MessNewFeed from '../components/MessNewFeed'
import Sidebar from '../components/Sidebar'
const Messages = () => {
  return <Layout title = "Messages / Twitter">

<div className='h-screen flex flex-row'>
        <Sidebar/>

    <div className='w-1/3'>
      <MessageFeed/>
    </div>
    <MessNewFeed/>
    </div>
    </Layout>
}

export default Messages