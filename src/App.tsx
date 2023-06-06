import React from 'react';
import logo from './logo.svg';
import poweredImage from './assets/powered.png'
import styles from './App.module.css'

function App() {
  return (
<div className={styles.main}>
	<header>
	<div className={styles.headerContainer}>
	<img src={poweredImage} width={150}/>
	</div>
	</header>
</div>
  );
}

export default App;
