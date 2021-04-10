import { useQuery } from "react-query";

type Character = {
  name: string;
  homeworld: string;
};

type Params = {
  queryKey: any;
};

async function getCharacter(params: Params) {
  const [, { id }] = params.queryKey;
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const character = await response.json();

  return character;
}

type Planet = {
  name: string;
};

type PlanetParams = {
  queryKey: any;
};

async function getPlanet({ queryKey }: PlanetParams) {
  const [, { url }] = queryKey;
  const response = await fetch(url.replace("http://", "https://"));
  if (!response.ok) {
    throw Error("Problem fetching planet");
  }
  const data = await response.json();
  return data;
}

export default function Query() {
  const {
    status: characterStatus,
    error: characterError,
    data: characterData,
  } = useQuery<Character, Error>(["character", { id: 1 }], getCharacter);

  const {
    status: planetStatus,
    error: planetError,
    data: planetData,
  } = useQuery<Planet, Error>(
    ["planet", { url: characterData?.homeworld }],
    getPlanet,
    {
      enabled: !!characterData?.homeworld,
    }
  );

  if (characterStatus === "loading" || planetStatus === "loading") {
    return <div>...</div>;
  }
  if (characterStatus === "error") {
    return <div>{characterError!.message}</div>;
  }
  if (planetStatus === "error") {
    return <div>{planetError!.message}</div>;
  }
  return (
    <div>
      {characterData && <h3>{characterData.name}</h3>}
      {planetData && <p>{planetData.name}</p>}
    </div>
  );
}
