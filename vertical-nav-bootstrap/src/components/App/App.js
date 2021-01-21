import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './App.css'

function App() {
  return (
    <main id="main-wrapper">
      <section>
        <div id="sidebar-wrapper">
          <Sidebar />
        </div>
      </section>
      <section>
        <div id="page-content-wrapper">

        </div>
      </section>
    </main>
  );
}

export default App;
