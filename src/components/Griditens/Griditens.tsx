import styles from "./Griditens.module.css";
import { Level } from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  itemData: Level;
};

export const Griditens = ({ itemData }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: itemData.color }}>
      <div className={styles.gridIcon}>
        <img src={itemData.icon === "up" ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{itemData.title}</div>
      <div className={styles.gridInfo}></div>
    </div>
  );
};
