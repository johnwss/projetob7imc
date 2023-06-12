import { useState } from "react";
import poweredImage from "./assets/powered.png";
import styles from "./App.module.css";
import { levels, calculateImc } from "./helpers/imc";
import { Griditens } from "./components/Griditens";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalcButton = () => {
    if (heightField && weightField) {
    } else {
      return alert("Preencha todos os campos");
    }
  };
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            {" "}
            IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite sua altura, em metros"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite seu peso, em kilos"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalcButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((i, k) => (
              <Griditens key={k} itemData={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
