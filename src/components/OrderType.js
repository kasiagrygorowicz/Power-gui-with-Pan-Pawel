import classes from './OrderType.module.css'
function OrderType(props) {
  return (
    <div className={classes.contentStyle}>
      <div className={classes.item}>{props.orderType}</div>
      <div className={classes.item}>{props.quantity}</div>
    </div>
  );
}

export default OrderType;
