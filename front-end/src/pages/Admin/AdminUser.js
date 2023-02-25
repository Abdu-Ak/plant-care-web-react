import React from 'react'
import Sidebar from '../../component/Admin/sidebar/Sidebar'
import UserManage from '../../component/Admin/usermanage.js/UserManage'

function AdminUser() {
  return (
    <div>
    
        <Sidebar/>
       
        <div className='sm:p-3  p-32'>
        <UserManage/>
        </div>
        
    </div>
  )
}

export default AdminUser