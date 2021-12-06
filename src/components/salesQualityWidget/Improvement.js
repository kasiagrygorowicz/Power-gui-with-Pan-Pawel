import classes from "./Improvement.module.css";

function Improvement({ aspect1, aspect2, aspect3 }) {
  return (
    <div>
      <div className={classes.mainStructure}>
        <div className={classes.questionLabel}>What you need to improve?</div>
        <div className={classes.minorStructure}>
          <div>{aspect1}</div>
          <div>{aspect2}</div>
          <div>{aspect3}</div>
        </div>
      </div>
    </div>
  );
}

export default Improvement;
