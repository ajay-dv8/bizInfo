import Header from '@/components/Header'
import Questions from '@/components/questions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { createClient } from '@supabase/supabase-js'

const page = () => {
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
/*
  const handleUpload = async (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        try {
          const filePath = `uploads/${file.name}`;
          let { error } = await supabase.storage.from('your-bucket-name').upload(filePath, file);
          if (error) {
            console.error('Error uploading file:', error);
          } else {
            console.log(`File uploaded at: ${filePath}`);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
    console.log(files);
  };
*/


  return (
    <div className='w-full'>
      <div className="sticky top-0">
        <Header/>
      </div>
      <div className="flex justify-center items-center flex-col py-6 w-full">
        <h2 className="text-xl font-semibold py-2">Business Form</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Fill the form with the required details
        </p>
      </div>

      <Questions />

    </div>
  )
}

export default page