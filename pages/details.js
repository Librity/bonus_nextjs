import React from "react";
import axios from "axios";

import Link from "next/link";

import withAnalytics from "~/hocs/withAnalytics";

function Details({ user }) {
  return (
    <>
      <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} width="200" />
      </div>
      <Link href="/users">
        <a>Voltar</a>
      </Link>
    </>
  );
}

Details.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Details);
