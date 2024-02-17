import Card from "@/components/card"
import Header from "@/components/Header"
import UserPlus from "@/assets/user-plus.svg"
import eye from "@/assets/eye.svg"
import edit from "@/assets/edit.svg"
import Link from "next/link"
import LargeCard from "@/components/largeCard"
import ViewBusiness from "@/components/viewBusiness"


const page = () => {
  return (
    <div className="w-full">
      <div className="sticky top-0 backdrop-blur-sm bg-white/30">
        <Header />
      </div>
      <main className="px-4 py-10 md:px-20">
        <div className="flex justify-between w-full ">
          <div className="text-4xl font-bold">Dashboard</div>
        </div>

        <div className="flex flex-row justify-between flex-wrap gap-4 mt-8">
          <Link href="/add_user">
            <Card 
              category="Admin" 
              title="Add new business" 
              description="Click card to fill form for new user."
              icon={UserPlus}
            />
          </Link>

          <Link href="/view_business">
            <Card 
              category="user" 
              title="View my businesses" 
              description="View list of businesses added."
              icon={eye}
            />
          </Link>

          <Link href="/view_business_details">
            <Card 
              category="Admin" 
              title="View business's full details" 
              description="List businesses with full details."
              icon={eye}
            />
          </Link>

          <Card 
            category="user" 
            title="Edit business" 
            description="Edit business information."
            icon={edit}
          />
        </div>

        <div className="flex w-full border shadow rounded-lg px-2 py-2 mt-6">
          <ViewBusiness />
        </div>
      </main>
    </div>
  )
}

export default page