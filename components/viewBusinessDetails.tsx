import { createClient } from "@supabase/supabase-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"


const ViewBusinessDetails = async () => {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from('biz_info')
    .select('*');

    if (error) {
      console.error('Error fetching data: ', error);
    } else {
      console.log('Data fetch successful: ', /*data*/);
    }
  return (
    <div className="w-full px-4 md:px-20">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Business name</TableHead>
            <TableHead>Business type</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Owner / manager</TableHead>
            <TableHead>Services</TableHead>
            <TableHead>Extra services</TableHead>
            <TableHead>Price range</TableHead>
            <TableHead>Online presence</TableHead>
            <TableHead>Target audience</TableHead>
            <TableHead>Goals</TableHead>
            <TableHead>Future goals</TableHead>
            <TableHead>Other info</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data ? data.map((data:any) => (
            <TableRow key={data.id}>
              <TableCell>{data.biz_name}</TableCell>
              <TableCell>{data.biz_type}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.biz_location}</TableCell>
              <TableCell>{data.biz_owner}</TableCell>
              <TableCell>{data.services}</TableCell>
              <TableCell>{data.extra_services}</TableCell>
              <TableCell>{data.price_range}</TableCell>
              <TableCell>{data.online_presence}</TableCell>
              <TableCell>{data.target_audience}</TableCell>
              <TableCell>{data.goals}</TableCell>
              <TableCell>{data.future_goals}</TableCell>
              <TableCell>{data.other_info}</TableCell>
            </TableRow>
          )): "Loading" }
        </TableBody>
      </Table>
    </div>
  )
}

export default ViewBusinessDetails