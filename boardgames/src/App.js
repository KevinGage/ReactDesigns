import { useState } from "react";
import SearchResult from "./components/SearchResult";
import axios from "axios";
import xml2js from "xml2js";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const doSearch = async () => {
    const result = await axios.get(
      `https://www.boardgamegeek.com/xmlapi2/search?query=${query}&type=boardgame,boardgameexpansion`
    );

    if (result.status === 200) {
      const parser = new xml2js.Parser();
      const games = await parser.parseStringPromise(result.data, {
        trim: true,
      });

      setResults(games.items.item);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={doSearch}>Search</button>

      {results.length > 0
        ? results.map((r) => (
            <SearchResult
              key={`${r.$.type}${r.$.id}`}
              name={r.name[0].$.value}
            />
          ))
        : null}
    </div>
  );
}

export default App;
