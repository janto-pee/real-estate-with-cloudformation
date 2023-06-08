import PropertyDetailLayout from "../Layout/PropertyDetailLayout";
import { Buy } from "../component";
import SearchFilter from "../Layout/SearchFilter";

export default function BuyPage() {
  return (
    <>
      <PropertyDetailLayout>
        <SearchFilter />
        <Buy />
      </PropertyDetailLayout>
    </>
  );
}
