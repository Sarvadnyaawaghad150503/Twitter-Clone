import React from 'react'
import BookFeed from '../components/BookFeed'
import ExploreBar from '../components/ExploreBar'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
const BookMarks = () => {
  return <Layout title = "BookMarks / Twitter">

    <div className='h-screen flex flex-row'>
        <Sidebar/>

        <div className='flex-1 '>
        <BookFeed/>
        </div>
        <ExploreBar/>
    </div>
    </Layout>
}

export default BookMarks