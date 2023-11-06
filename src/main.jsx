import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import EditDoctor from './component/doctorDetail/EditDoctor'
import Navbar from './navbar/navbar'
import Introduction from './introductionPage/introduction'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Navbar/>
    <Introduction/>
    </>
  </React.StrictMode>
)
