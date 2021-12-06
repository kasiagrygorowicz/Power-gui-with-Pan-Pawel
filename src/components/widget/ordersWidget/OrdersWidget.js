import { Card } from "react-bootstrap";
import OrderType from "./OrderType";
import widgetClasses from "../../layout/widget/Widget.module.css";
import classes from './OrdersWidget.module.css'
import OrdersSummary from "./OrdersSummary";
import Widget from "../../layout/widget/Widget";

function OrdersWidget(props) {
  return (
    
      <Widget className={widgetClasses.basicShape}>
        <Card.Body>
          <Card.Title className={widgetClasses.titleStyle}>Orders</Card.Title>
          <div className={classes.mainStructure}>
            <div className={classes.ordersPosition}>
              <OrderType orderType={"unpaid"} quantity={20} />
              <OrderType orderType={"not send"} quantity={10} />
              <OrderType orderType={"returns"} quantity={0} />
            </div>
            <div className={classes.ordersSummaryPosition}>
          <OrdersSummary allOrders={30}/>
            </div>
          </div>
        </Card.Body>
      </Widget>

      
    
  );
}

export default OrdersWidget;
