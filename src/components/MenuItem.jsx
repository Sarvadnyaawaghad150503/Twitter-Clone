import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = (props) => {
    const {title, icon, link} = props;
  return (
    <Link to={link}>
      <div className="flex flex-row p-3 hover:bg-slate-200 rounded-full cursor-pointer">
       {icon}
       <h1 className="text-xl font-medium px-3">{title}</h1>
       </div>
     </Link>
  )
}

export default MenuItem





