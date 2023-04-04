import React from 'react'

function Error404() {
  return (
    <>

<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="p-8 bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">404 Page Not Found</h1>
    <p class="text-gray-700 mb-8">Sorry, we couldn't find the page you were looking for.</p>
    <a href="/" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go Home</a>
  </div>
</div>

    </>
  )
}

export default Error404