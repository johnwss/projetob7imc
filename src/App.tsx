import React from 'react';
import logo from './logo.svg';
import './App.css';
import poweredImage from './assets/powered.png'
import styles from './App.module.css'

function App() {
  return (
<div className={styles.main}>
	<header>
	<div className={styles.headerContainer}>
	<img src={poweredImage}/>
	</div>
	</header>
</div>
  );
}

export default App;
