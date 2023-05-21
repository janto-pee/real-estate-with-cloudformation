import { Fragment, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { BannerWForm, Blog, Hero, ListItems, Logo } from "../component";

// interface HomeDataInteface {
//   title: string;
//   amount: string;
// }

export default function Home() {
  // const [homeData, setHomeData] = useState<HomeDataInteface[]>();
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      // const data = await setHomeData();
      // if (data) {
      //   setHomeData(data);
      // }
      setLoading(false);
    };
    fetchHomeData();
  }, []);

  return (
    <Fragment>
      <Layout>
        <Hero />
        <ListItems
          classnames="p-8 lg:pb-28"
          headertext="Discover Our Best Deals"
          headerclass="text-2xl lg:text-4xl"
          subtextclass="mt-2 hidden lg:flex lg:text-lg leading-8 text-gray-600"
          subtext="You don't have to go broke to rent a beautiful apartment. Here are some of the cheapest"
        />
        <BannerWForm />
        <Blog />
        <Logo />
      </Layout>
    </Fragment>
  );
}
