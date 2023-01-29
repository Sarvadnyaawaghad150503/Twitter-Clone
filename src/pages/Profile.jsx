import React from 'react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ExploreBar from '../components/ExploreBar';
import ProfileInfo from '../components/ProfileInfo';
import profileData from '../data/profileData.json'
import TweetCard from '../components/TweetCard';
import tweetData from '../data/tweets.json'



const Profile = () => {
  const profile = profileData;

  const allTweets = tweetData.map((item) =>{
    return <TweetCard key={item.id} tweetData={item} />
  })

  return <Layout title="Sarvadnya_Awaghad / Twitter">
  <div className="h-screen flex flex-row">
      {/* Sidebar  */}
      <Sidebar />
      {/* Homefeed Section  */}
      <div className="flex-1 overflow-scroll">
          <ProfileInfo profile={profile}/>
        
          {allTweets}
      </div>
      {/* Right Explore bar */}
      <ExploreBar/>
  </div>
</Layout>;
}

export default Profile


