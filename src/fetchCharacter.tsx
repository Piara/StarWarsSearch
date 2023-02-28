import { useEffect, useState } from "react";

export default function useFetchCharacter(url: string) {
  const [character, setCharacter] = useState([{ name: "" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacter(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url)
          .then((response) => response.json())
          .then((characterData) => {
            setCharacter(characterData.results);
            setLoading(false);
          });
        return response;
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchCharacter(url);
  }, [url]);
  return { character, loading };
}
