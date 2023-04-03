import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendsDetail from './components/FreiendsDetail/FriendsDetail';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path:"/about",
//     element: <About />
//   },
//   {
//     path:"/contact",
//     element: <Contact />
//   }
// ]);

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
   
    children: [

      {
        path: "/" ,
        element: <First />
 
      },
      {
        path: "/friends",
        element: <Friends /> , 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users/')

      },
      {
        path:"friend/:friendID",
        element: <FriendsDetail />,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)

      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />

      },
    ],
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
