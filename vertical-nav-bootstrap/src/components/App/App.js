import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <main class="main-wrapper">
      <section>
        <div class="sidebar-wrapper">
          <Sidebar />
        </div>
      </section>
      <section>
        <div id="page-content-wrapper">
          <h1>Body</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
