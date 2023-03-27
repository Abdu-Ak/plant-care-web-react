import React from 'react'
import AddPlans from '../../components/Admin/addplan/AddPlans'
import Sidebar from '../../components/Admin/sidebar/Sidebar'

function AddPlansPage() {
  return (
    <>
 <div>
        <Sidebar />
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <AddPlans/>
        </div>
      </div>
    </>
  )
}

export default AddPlansPage