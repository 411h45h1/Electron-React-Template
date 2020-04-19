import React from "react";
import "./App.css";

import { Menu } from "./components/Menu";

// start with script, yarn watch:electron then yarn start

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu title={"Title"} />
      </header>
      <body className="App-body">
        <div style={{ height: "78vh" }} />
      </body>
    </div>
  );
}

export default App;
