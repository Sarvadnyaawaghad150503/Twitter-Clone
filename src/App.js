import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from './pages/Explore';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import BookMarks from './pages/BookMarks';
import Lists from './pages/Lists';
const App = () => {
  const router = createBrowserRouter([
  {path:"/",
    element:<Home/>
  },

  {path:"/explore",
    element:<Explore/>
  },

  {path:"/profile",
    element:<Profile/>
  },

  {path:"/notifications",
    element:<Notifications/>
  },

  {path:"/messages",
    element:<Messages/>
  },

  {path:"/bookmarks",
    element:<BookMarks/>
  },
  {path:"/lists",
    element:<Lists/>
  }
  ]);


    return <div>
      <RouterProvider router={router}/>
    </div>;

  // return (
  //   <div>App</div>
  // )
};

export default App








// import React from 'react'
// import { createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Explore from './pages/Explore';
// import Home from './pages/Home';
// import Profile from './pages/Profile';

// const App = () => {
// const router = createBrowserRouter([
//   {
//   path:"/",
//   element:<Home />
// },
// {
//   path:"/explore",
//   element:<Explore />
// },
// {
//   path:"/profile",
//   element:<Profile />
// }
// ]);

// return
//   <div> <RouterProvider router={router} />

// </div>;


// }
// export default App