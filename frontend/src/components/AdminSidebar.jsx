import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaTachometerAlt,FaUsers,FaBuilding} from 'react-icons/fa'
const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-8 w-64'>
      <div className='text-2xl text-center font-pacific'>
        Employee Ms
      </div>
      <div className='px-4' >
        <NavLink to="/admin-dashboard"
        className={({isActive})=>`${isActive?"bg-teal-500":""} flex items-center space-x-4 py-2.5 px-4 rounded`}>
<FaTachometerAlt/>
<span>
    Dashboard
</span>
        </NavLink>
           <NavLink to="/"
           className='flex items-center space-x-4 py-2.5 px-4 rounded'>
<FaUsers/>
<span>
    Employee
</span>
        </NavLink>
            
           <NavLink to="/"
           className='flex items-center space-x-4 py-2.5 px-4 rounded'>
<FaBuilding/>
<span>
    Leave
</span>
        </NavLink>

                <NavLink to="/"
                className='flex items-center space-x-4 py-2.5 px-4 rounded'>
<FaBuilding/>
<span>
    Employee
</span>
        </NavLink>


                <NavLink to="/"
                className='flex items-center space-x-4 py-2.5 px-4 rounded'>
<FaBuilding/>
<span>
    Employee
</span>
        </NavLink>

                <NavLink to="/"
                className='flex items-center space-x-4 py-2.5 px-4 rounded'>
<FaBuilding/>
<span>
    Employee
</span>
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
