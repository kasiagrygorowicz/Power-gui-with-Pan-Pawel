import classes from "./Improvement.module.css";

function Improvement({ t,aspect1, aspect2, aspect3 }) {
  return (
    <div>
      <div className={classes.mainStructure}>
        <div className={classes.questionLabel}>{t("salesQuality.q")}</div>
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
