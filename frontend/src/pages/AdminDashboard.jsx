import React from 'react'
import {useAuth} from '../context/authContext'
import AdminSidebar from '../components/AdminSidebar'
import Navbar from '../components/Navbar'
const AdminDashboard = () => {
  const {user }=useAuth()

  return (
    <div className='flex'>
  <AdminSidebar/> 
  <div className='flex-1 ml-64'>
<Navbar/>
  </div>
    </div>
  )
}

export default AdminDashboard
