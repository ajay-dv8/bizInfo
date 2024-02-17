import Header from '@/components/Header'
import ViewBusinessDetails from '@/components/viewBusinessDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <Header/>
      </div>
      <div className="flex justify-center items-center flex-col py-6 w-full">
        <h2 className="text-xl font-semibold py-2">Business List</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          List of businesses with full details
        </p>
      </div>

      <div className="">
        <ViewBusinessDetails/>
      </div>
    </div>
  )
}

export default page