import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routers/router'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
