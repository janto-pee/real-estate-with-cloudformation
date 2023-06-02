import {useState} from 'react'
import PropertyDetailLayout from "../Layout/PropertyDetailLayout";
import AllProfile from "../component/Profile/AllProfile";
import Sidebar from "../component/Profile/Sidebar";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("profilesummary");
 
  return (
    <PropertyDetailLayout>
      <div className='flex relative'>
        <div className='hidden md:flex bg-gray-200 p-2 px-4'><Sidebar setActiveComponent={setActiveComponent} /></div>
        <div className='w-full md:w-[80%] p-2 px-4'><AllProfile activeComponent={activeComponent} setActiveComponent={setActiveComponent}/></div>
      </div>
    </PropertyDetailLayout>
  )
}
