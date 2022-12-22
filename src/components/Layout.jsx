import React from 'react'
import { Helmet } from 'react-helmet'
const Layout = ({title, children}) => {
  return (
    <div>
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href="https://res.cloudinary.com/sarveshp46/image/upload/v1671113197/twitter-workshop/twitter_mswkcv.png" type="image/png" sizes="16x16" />
        </Helmet>
        <div>{children}</div>
    </div>
  )
}

export default Layout





