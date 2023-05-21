import PropertyDetailLayout from "../Layout/PropertyDetailLayout";
import { ItemGrid } from "../component";
import SearchFilter from "../component/SearchFilter";

export default function Buy() {
  return (
    <>
      <PropertyDetailLayout>
        <SearchFilter />
        <ItemGrid paginate headerclass="hidden lg:block" imgheight1="lg:h-80" />
        {/* <ListItems classnames="bg-gray-200 p-8" headertext="Properties For Sale" paginate headerclass="mt-4 mb-12 text-3xl"/> */}
      </PropertyDetailLayout>
    </>
  );
}
