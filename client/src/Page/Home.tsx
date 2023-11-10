import { Fragment } from "react";
import Layout from "../Layout/Layout";
import { BannerWForm, Blog, Hero, HomeProperties, Logo } from "../component";

export default function Home() {

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
