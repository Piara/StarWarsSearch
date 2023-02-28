import "./styles.css";
import { useState } from "react";
import useFetchCharacter from "./fetchCharacter";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const { character: fetchedCharacter, loading: isLoading } = useFetchCharacter(
    url
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onClick = () => {
    setUrl("https://swapi.dev/api/people/?search=" + searchText);
    setSearchText("");
  };

  let characters;
  characters = fetchedCharacter.map(
    (character: { name: string }, index: number) => {
      return (
        <div className="character" key={index}>
          <img
            className="character__picture"
            src="https://via.placeholder.com/180x150/0A0A0A/000000?text=X"
            alt="Hier könnte Ihre Werbung stehen"
          />
          <div>{character.name}</div>
        </div>
      );
    }
  );

  return (
    <div className="App">
      <h1>Star Wars Character Search</h1>
      <div className="search">
        <input
          type="text"
          className="searchInput"
          onChange={handleInput}
          value={searchText}
          placeholder="Search Character"
        />
        <button className="searchButton" onClick={onClick}>
          Search Character
        </button>
      </div>
      {isLoading ? (
        <p>Loading Characters...</p>
      ) : (
        <div className="characterDisplay">{characters}</div>
      )}
    </div>
  );
}
