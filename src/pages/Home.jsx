import React from 'react'
import ExploreBar from '../components/ExploreBar'
import HomeFeed from '../components/HomeFeed'
import Layout from "../components/Layout"
import Sidebar from '../components/Sidebar'

const Home = () => {
  return <Layout title="Home / Twitter">
  <div className="h-screen flex flex-row ">
      {/* Sidebar  */}
      <Sidebar />
      {/* Homefeed Section  */}
      <div className="flex-1">
          <HomeFeed/>
      </div>
      {/* Right Explore bar */}
      <ExploreBar/>
  </div>
</Layout>;
  
  // return (
  //   <div>
  //     <Layout title="Home / Twitter">
  //       <Sidebar />
  //       <div className='flex-1'>
  //         <HomeFeed/>
  //       </div>
  //       <ExploreBar/>
  //     </Layout>
  //   </div>
  // )
}

export default Home





