import React from 'react'
import Sidebar from '../../component/Admin/sidebar/Sidebar'
import UserManage from '../../component/Admin/usermanage/UserManage'

function AdminUser() {
  return (
    <div>
    
     <div >
      
     <Sidebar/>
        <div className='py-24 p-5  md:p-32 md:ml-40 '>
        <UserManage/>
 
        </div>
         
      
     </div>

        
    </div>
  )
}

export default AdminUser