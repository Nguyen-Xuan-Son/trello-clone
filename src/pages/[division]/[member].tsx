import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";

import { Infos } from "./../home";

interface InfoProps {
  infos: Infos[] | undefined;
}

export default function Member({ infos: infosData }: InfoProps) {
  const [infos, setInfos] = useState(infosData);
  const { query } = useRouter();

  useEffect(() => {
    async function fetchInfos() {
      const response = await fetch(
        `http://localhost:3000/infos?division=${query.division}&member=${query.member}`
      );
      const infosData: Infos[] = await response.json();
      setInfos(infosData);
    }

    if (infos && infos.length === 0) {
      fetchInfos();
    }
  }, []);

  if (infos && !infos[0]) {
    return <pre>Loading...</pre>;
  }

  return <pre>{infos && JSON.stringify(infos[0])}</pre>;
}

interface MyNextPageContext extends NextPageContext {
  query: {
    division: string;
    member: string;
  };
}

Member.getInitialProps = async ({ query, req }: MyNextPageContext) => {
  if (!req) {
    return { infos: [] };
  }

  const response = await fetch(
    `http://localhost:3000/infos?division=${query.division}&member=${query.member}`
  );
  const infosData = await response.json();
  return {
    infos: infosData,
  };
};
