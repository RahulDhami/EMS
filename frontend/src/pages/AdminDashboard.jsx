import React from 'react'
import {useAuth} from '../context/authContext'

const AdminDashboard = () => {
  const {user }=useAuth()

  return (
    <div>
    AdminDashboard — Welcome {user?.name || "Admin"}
    </div>
  )
}

export default AdminDashboard
