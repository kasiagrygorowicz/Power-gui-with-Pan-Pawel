import classes from "./AnnualScore.module.css";
import { Star, StarFill } from "react-bootstrap-icons";

function AnnualSalesScore({t, score}) {
  return (
    <div className={classes.mainStructure}>
      <div className={classes.labelStyle}>
          {t("salesQuality.msg")}
      </div>
      <div className={classes.ratingLabel}>{score}</div>
    </div>
  );
}

export default AnnualSalesScore;
