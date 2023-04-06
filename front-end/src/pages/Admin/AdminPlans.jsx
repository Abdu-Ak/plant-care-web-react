import React from 'react'
import Plans from '../../components/Admin/plans/Plans'
import Sidebar from '../../components/Admin/sidebar/Sidebar'

function AdminPlans() {
  return (
    <>
     <div>
        <Sidebar />
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <Plans/>
        </div>
      </div>
    </>
  )
}

export default AdminPlans