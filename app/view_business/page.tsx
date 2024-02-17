import Header from "@/components/Header"
import ViewBusiness from "@/components/viewBusiness"


const page = () => {
  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Header/>
      </div>
      <div className="flex justify-center items-center flex-col py-6 w-full">
        <h2 className="text-xl font-semibold py-2">Business List</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          List of businesses added by you
        </p>
      </div>

      <ViewBusiness/>
      
    </div>
  )
}

export default page