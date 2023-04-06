import React from 'react'
import EditPlans from '../../components/Admin/editplan/EditPlan'
import Sidebar from '../../components/Admin/sidebar/Sidebar'

function EditPlanPage() {
  return (
    <>
 <div>
         <Sidebar/>
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <EditPlans/>
        </div>
      </div>

    </>
  )
}

export default EditPlanPage