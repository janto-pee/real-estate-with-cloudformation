import Layout from "../Layout/Layout";
import { ItemGrid } from "../component";

export default function FindRealtors() {
  return (
    <>
      <Layout>
        <ItemGrid
          itemheader="Real Estate Agents & Property Managers"
          imgheight1="lg:h-32"
        />
        {/* <RealtorGrid /> */}
      </Layout>
    </>
  );
}
