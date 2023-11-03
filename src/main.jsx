import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import EditDoctor from './doctorDetail/EditDoctor'
import Navbar from './navbar/navbar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Navbar/>
    <EditDoctor/>
    </>
  </React.StrictMode>
)
