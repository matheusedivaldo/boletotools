import React from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from './components/Hero/Hero.jsx';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;