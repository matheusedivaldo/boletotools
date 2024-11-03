import React from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;