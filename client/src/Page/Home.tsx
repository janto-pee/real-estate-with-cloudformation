import { Fragment, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { BannerWForm, Blog, Hero, HomeProperties, Logo } from "../component";


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
        <HomeProperties />
        <BannerWForm />
        <Blog />
        <Logo />
      </Layout>
    </Fragment>
  );
}
