import Day from "../Day";

import styles from "./month.module.scss";

const Month = ({ month }) => {
  return (
    <div className={styles.dates}>
      {month.map((row, i) =>
        row.map((day, j) => <Day day={day} key={j} rowIndex={i} />)
      )}
    </div>
  );
};

export default Month;
