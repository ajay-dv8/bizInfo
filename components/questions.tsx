'use client';
import React, { useState } from 'react'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { createClient } from '@supabase/supabase-js';

const Questions = () => {
  const [admin, setAdmin] = useState('');
  const [biz_name, setBiz_name] = useState('');
  const [biz_type, setBiz_type] = useState('');
  const [biz_owner, setBiz_owner] = useState('');
  const [biz_location, setBiz_location] = useState('');
  const [online_presence_state, setOnline_presence_state] = useState('');
  const [social_links, setSocial_links] = useState('');
  const [target_audience, setTarget_audience] = useState('');
  const [services, setServices] = useState('');
  const [extra_services, setExtra_services] = useState('');
  const [goals, setGoals] = useState('');
  const [future_goals, setFuture_goals] = useState('');
  const [price_range, setPrice_range] = useState('');
  const [other_info, setOther_info] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [phone, setPhone] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  async function addBusiness(event: any) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const admin = formData.get('admin') as string
    const biz_name = formData.get('biz_name') as string
    const biz_type = formData.get('biz_type') as string
    const biz_owner = formData.get('biz_owner') as string
    const biz_location = formData.get('biz_location') as string
    const online_presence_state = formData.get('online_presence_state') as string
    const social_links = formData.get('social_links') as string
    const target_audience = formData.get('target_audience') as string
    const services = formData.get('services') as string
    const extra_services = formData.get('extra_services') as string
    const goals = formData.get('goals') as string
    const future_goals = formData.get('future_goals') as string
    const from = formData.get('from') as string
    const to = formData.get('to') as string
    const phone = formData.get('phone') as string
    const other_info = formData.get('other_info') as string

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  
    try {
      const { data, error } = await supabase
      .from('biz_info')
      .insert([
        {
          admin : admin,
          biz_name : biz_name,
          biz_type : biz_type,
          biz_owner : biz_owner,
          biz_location : biz_location,
          online_presence : " state : " + online_presence_state + " | links : " + social_links,
          target_audience : target_audience,
          services : services,
          extra_services : extra_services,
          goals : goals,
          future_goals : future_goals,
          price_range : "from : Ghc." + from + " to : " + to,
          other_info : other_info,
          phone : phone,
        }
      ])
      .select("*");
      console.log(data);

      if (error) {
        console.error('Error inserting data: ', error);
      } else {
        console.log('Data inserted successfully: ', data);
      }

    } catch (error) {
      console.error('Error: ', error);
    };

    setAdmin('');
    setBiz_name('');
    setBiz_type('');
    setExtra_services('');
    setFuture_goals('');
    setGoals('');
    setBiz_location('');
    setOnline_presence_state('');
    setOther_info('');
    setBiz_owner('');
    setPrice_range('');
    setServices('');
    setSocial_links('');
    setTarget_audience('');
    setTo('');
    setFrom('');
    setPhone('');

    setIsLoading(false);
  }
  
  return (
    <>
    <form onSubmit={addBusiness} className='flex flex-col gap-6 px-4 md:px-20 '>

      <div className="flex-row flex items-center gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>Admin Name </p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          
          <Input name='admin' type='text' value={admin} onChange={e => setAdmin(e.target.value)}/>
        </p>
      </div>

      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>1. Name of business</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='biz_name' type='text' value={biz_name} onChange={e=>setBiz_name(e.target.value)} />
        </p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>2. Business type</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='biz_type' type='text' value={biz_type} onChange={e => setBiz_type(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>Small, medium or big hotel, guest house etc. </p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>3. Name of business owner / manager </p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='biz_owner' type='text' value={biz_owner} onChange={e => setBiz_owner(e.target.value)}/>
        </p>
        
      </div>  
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>4. Business location</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='biz_location' type='text' value={biz_location} onChange={e => setBiz_location(e.target.value)}/>
        </p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>5. Does the business have an online presence</p>
        
          <RadioGroup name='online_presence_state' className='flex flex-row'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='social_links' type='text' placeholder='Input website or social media links here' value={social_links} onChange={e => setSocial_links(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>If multiple answers separate them with a '/'</p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>6. Who/what is the Business's target audience</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='target_audience' type='text' value={target_audience} onChange={e => setTarget_audience(e.target.value)}/>
        </p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>7. Services provided by the business</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='services' type='text' value={services} onChange={e => setServices(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>These are the main services the business offers, if any.</p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>8. Extra services provided by the business</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='extra_services' type='text' value={extra_services} onChange={e => setExtra_services(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>These are the added services the business offers as a plus, if any. Example swimming, games, food etc. If multiple answers separate them with a '/'</p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>9. Business goals for the end of the year</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='goals' type='text' value={goals} onChange={e => setGoals(e.target.value)} />
        </p>
        <p className='text-sm text-gray-500'>These are the added services the business offers as a plus, if any. Example swimming, games, food etc.</p>
      </div>
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>10. Goals for the business in the coming years</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          ans. 
          <Input name='future_goals' type='text' value={future_goals} onChange={e => setFuture_goals(e.target.value)} />
        </p>
      </div>

      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>11. Price range or model</p>
        <p className='flex flex-row gap-4 text-lg'> 
          ans. <Label>From</Label> 
          <Input name='from' type='text' value={from} onChange={e => setFrom(e.target.value)}/> 
          <Label>To</Label>
           <Input name='to' type='text' value={to} onChange={e => setTo(e.target.value)}/>
        </p>
        
        <p className='text-sm text-gray-500'>Service prices from least to the highest</p>
      </div>

      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>{"12. Business phone number(s)"}</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          <Input name='phone' type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>If multiple phone numbers, separate with a '/' </p>
      </div> 
        
      <div className=" flex-col flex gap-4 border rounded-lg px-6 py-4 shadow">
        <p className='text-lg '>13. Other relevant information</p>
        <p className='flex flex-row items-end gap-4 text-lg'>
          <Input name='other_info' type='text' value={other_info} onChange={e => setOther_info(e.target.value)}/>
        </p>
        <p className='text-sm text-gray-500'>Service prices from least to the highest</p>
      </div> 
        
      <div className="w-full flex justify-center">
        <Button 
          type='submit'
          disabled={isLoading}
          className="w-[50%] bg-blue-500 hover:bg-blue-400 text-white shadow-2xl align-middle mb-4" 
        >
          {isLoading ? 'Submitting form...' : 'Submit'}
        </Button>
      </div>
    </form>
    </>
  )
}

export default Questions