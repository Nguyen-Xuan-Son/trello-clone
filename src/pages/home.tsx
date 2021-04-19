import Link from "next/link";

export interface Infos {
  id: number;
  member: string;
  division: string;
}

export interface ListProps {
  infos: Infos[] | undefined;
}

export default function Home({ infos }: ListProps) {
  return (
    <h1>
      Home page
      <br />
      {infos &&
        infos.map((e) => (
          <div key={e.id}>
            <Link as={`/${e.division}/${e.member}`} href="/[division]/[name]">
              <a>Go to {`${e.division}'${e.member}`}</a>
            </Link>
          </div>
        ))}
    </h1>
  );
}

Home.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/infos");
  const infosData: Infos[] | undefined = await response.json();
  return {
    infos: infosData,
  };
};
