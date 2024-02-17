import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeployButton from './DeployButton'

const Header = async () => {

    const supabase = createClient();
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    const signOut = async () => {
      "use server";
      const supabase = createClient();
      await supabase.auth.signOut();
      return redirect("/login");
    };

  
  return (
    <div className='w-full flex justify-between px-4 md:px-20 py-2 items-center backdrop-blur-sm bg-white/30'>
      <div className='flex ju'>
        <DeployButton name='Dashboard'/>
      </div>
    
      <div className="flex items-center gap-4">
        Hey, {user ? user.email : ""}
      </div>

    </div>
  )
}

export default Header