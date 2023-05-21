import Layout from "../Layout/Layout";
import { ListItems } from "../component";
import SearchFilter from "../component/SearchFilter";

export default function Rent() {
  return (
    <>
      <Layout>
        <SearchFilter />
        <ListItems
          classnames="bg-gray-200 pb-8 p-8 lg:py-12"
          headertext="Properties For Rent"
          paginate
          headerclass="mt-4 mb-2 text-3xl"
          subtextclass="hidden md:flex  text-md mb-4 mt-2 lg:text-lg leading-8 text-gray-600"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin"
        />
      </Layout>
    </>
  );
}
