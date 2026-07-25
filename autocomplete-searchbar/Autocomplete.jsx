import React, { useEffect, useState } from "react";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    if (!input.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  const fetchData = async () => {
    if (cache[input]) {
      console.log("CACHE RETURN", input);
      setResults(cache[input]);
      return;
    }

    console.log("API CALL", input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    const recipes = json?.recipes || [];
    setResults(recipes);
    setCache((prev) => ({ ...prev, [input]: recipes }));
  };

  return (
    <div className="App">
      <h1>Autocomplete search bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 150)}
        />
        {showResults && (
          <div className="results-container">
            {results.map((r) => (
              <span className="result" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;