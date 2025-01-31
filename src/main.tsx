import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import TaskDetails from './pages/TaskDetailsPage.tsx'
import App from './App.tsx'
import './index.css'

// using createBrowserRouter function from "react-router-dom" library to set our routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/taskDetails",
    element: <TaskDetails/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)