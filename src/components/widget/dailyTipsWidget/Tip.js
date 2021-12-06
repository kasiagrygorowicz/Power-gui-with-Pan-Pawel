import classes from "./Tip.module.css";
function Tip({ tip }) {
  return <div className={classes.tipLabel}>{tip}</div>;
}

export default Tip;
