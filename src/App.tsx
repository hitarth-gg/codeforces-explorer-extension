/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import { Flex, Link } from "@radix-ui/themes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            fontFamily: "Pixelify Sans",
            fontSize: "1.2rem",
          }}
        >
          codeforces-explorer
        </p>
        <Flex gap={"3"}>
          <Link
            size={"1"}
            target="_blank"
            href=" https://github.com/hitarth-gg/codeforces-explorer"
          >
            GitHub
          </Link>
          <Link
            size={"1"}
            target="_blank"
            href=" https://hitarth-gg.github.io/codeforces-explorer/"
          >
            Website
          </Link>
          <Link size={"1"} target="_blank" href=" https://hitarth-gg.github.io/codeforces-explorer-extension/">
            Extension
          </Link>
        </Flex>
      </header>
    </div>
  );
}

export default App;
