import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"/login",
        //TODO: create Login.jsx page
        element: <Login />
      },
      {
        path: "/sign_up",
        //TODO: create SignUp.jsx page
        element: <SignUp />
      },
      {
        //to send data
        path: "/accoun/:id",
        //TODO: create SignUp.jsx page
        element: <SignUp />
      },
      {
        //the most specific path is the one it hits first
        path: "/accoun/asdf",
        //TODO: create SignUp.jsx page
        element: <SignUp />
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
