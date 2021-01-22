import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";

function App() {
  return (
    <main class="App">
      <section>
        <Sidebar />
      </section>
      <section>
        <Body />
      </section>
    </main>
  );
}

export default App;
