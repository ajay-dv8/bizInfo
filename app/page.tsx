import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex flex-col justify-center items-center px-5">
        <h1 className="text-slate-800 opacity-40 font-bold text-6xl mb-6">hello</h1> 
        <h1 className="text-black text-center font-bold text-7xl">Welcome to bizInfo ads</h1>

        <span className="flex flex-col justify-center items-center mt-6">
          <p className="text-center">We help put your business in front of the right people at the right time.</p>
          <p className="opacity-70">Lets introduce your business to the world !!!</p>
        </span>
      </div>

      <footer className="w-full h-6 border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs mb-0">
        <p>
         
          <a
            href="https://ajayportfolio.vercel.app/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Developer
          </a>
        </p>
      </footer>
    </div>
  );
}
