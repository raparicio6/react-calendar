import Day from "../Day";

const Month = ({ month }) => {
  return (
    <div className="dates">
      {month.map((row, i) =>
        row.map((day, j) => <Day day={day} key={j} rowIndex={i} />)
      )}
    </div>
  );
};

export default Month;
