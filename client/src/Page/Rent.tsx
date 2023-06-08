import Layout from "../Layout/Layout";
import { RentProperties } from "../component";
import SearchFilter from "../Layout/SearchFilter";

export default function Rent() {
  return (
    <>
      <Layout>
        <SearchFilter />
        <RentProperties />
      </Layout>
    </>
  );
}
