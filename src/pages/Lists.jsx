import React from 'react'
import ExploreBar from '../components/ExploreBar'
import Layout from '../components/Layout'
import ListFeed from '../components/ListFeed'
import Sidebar from '../components/Sidebar'
const Lists = () => {
  return <Layout title = "Lists / Twitter">

<div className='h-screen flex flex-row'>
        <Sidebar/>

        <div className='flex-1 '>
          <ListFeed/>
        </div>
        <ExploreBar/>
    </div>

  </Layout>
}

export default Lists