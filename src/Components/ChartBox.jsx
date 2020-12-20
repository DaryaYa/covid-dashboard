import styles from "./ChartBox.module.scss";
import { Charts } from "./Charts";

export const ChartBox = () => {
    return (
      <div className={styles.div}>
        <Charts />
      </div>
    );
};
