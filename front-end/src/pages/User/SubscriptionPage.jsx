import React from 'react'
import Navbar from '../../components/User/Navbar/Navbar'
import Subscription from '../../components/User/Subscription/Subscription'

function SubscriptionPage() {
  return (
    <>
<div>
        <Navbar />
      </div>
      <div className="bg-third/50 pt-28">
        <Subscription />
      </div>
    </>
  )
}

export default SubscriptionPage