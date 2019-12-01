import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/gecko.jpg" width="200" />
    <Title>Hello World</Title>
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
