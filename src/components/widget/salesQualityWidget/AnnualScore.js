import classes from "./AnnualScore.module.css";
import { Star, StarFill } from "react-bootstrap-icons";

function AnnualSalesScore() {
  return (
    <div className={classes.mainStructure}>
      <div className={classes.labelStyle}>
        Your annual sales quality score is{" "}
      </div>
      <div className={classes.ratingLabel}>4/5</div>
    </div>
  );
}

export default AnnualSalesScore;
