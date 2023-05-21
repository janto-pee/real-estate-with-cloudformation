import PropertyDetailLayout from "../Layout/PropertyDetailLayout";
import Advertise from "../component/Profile/Advertise";
import SellRight from "../component/Profile/SellRight";

export default function Sell() {
  return (
    <PropertyDetailLayout>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
      <div className="flex gap-2">
        <SellRight classes='hidden md:basis-2/6 rounded p-2' />
        <Advertise classes="basis-6/6 md:basis-4/6 md:ml-8" />
      </div>
      </div>
    </PropertyDetailLayout>
  )
}