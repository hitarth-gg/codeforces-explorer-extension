/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "./App.css";

function App() {
  function extractIdAndIndex(url: string) {
    const regex = /(\d+|[A-Za-z]\d+).*\/([A-Za-z]\d*)$/;
    const match = url.match(regex);
    if (match) {
      return { number: match[1], index: match[2].toUpperCase() };
    }
    return null;
  }

  const handleClick = () => {
    const url = window.location.href;
    if (url.includes("profile")) {
      console.log(url.split("/")[4]);
      window.open(
        `https://hitarth-gg.github.io/codeforces-explorer/?=${
          url.split("/")[4]
        }`
      );
    } else if (url.includes("contest") || url.includes("problemset")) {
      const x = extractIdAndIndex(url);
      if (x?.number && x.index) {
        window.open(
          `https://hitarth-gg.github.io/codeforces-explorer/?=${x.number}/${x.index}`
        );
      }
    }
  };
  return (
    <a
      style={{
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      CF-EXPLORER
    </a>
  );
}

export default App;
