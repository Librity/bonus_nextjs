import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/gecko.jpg" width="200" />
    <h1>Hello World</h1>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

Home.getInitialProps = async () => {
// https://github.com/zeit/next.js/blob/master/errors/empty-object-getInitialProps.md

  return { content: "not Empty" };
};


export default withAnalytics()(Home);
