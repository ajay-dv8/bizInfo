import { createClient } from "@supabase/supabase-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { useEffect } from "react";

const ViewBusiness = async () => {

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  //async function fetchData() {
    //try{
      const { data, error } = await supabase
      .from('biz_info')
      .select('biz_name, biz_type, biz_location, phone');

      if (error) {
        console.error('Error fetching data: ', error);
      } else {
        console.log('Data fetch successful: ', /*data*/);
      }

   // } catch(error) {
   //   console.error('Error: ', error);
    //}
  //}

  return (
    <div className="w-full px-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Business name</TableHead>
            <TableHead>Business type</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data ? data.map((data:any) => (
            <TableRow key={data.id}>
              <TableCell>{data.biz_name}</TableCell>
              <TableCell>{data.biz_type}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.biz_location}</TableCell>
            </TableRow>
          )): "Loading" }
        </TableBody>
      </Table>
    </div>
  )
}

export default ViewBusiness