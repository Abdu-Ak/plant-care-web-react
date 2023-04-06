import React from 'react'
import DashBoard from '../../components/Admin/dashboard/DashBoard'
import Sidebar from '../../components/Admin/sidebar/Sidebar'

function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <DashBoard />
        </div>
    </div>
  )
}

export default Dashboard