import classes from './OrderType.module.css'
function OrderType(props) {
    return (
        <div className={classes.contentStyle}>
            <div className={ classes.textStyle}>{props.orderType}</div>
            <div className={ classes.textStyle}>{props.quantity}</div>
        </div>
    );
}

export default OrderType;
