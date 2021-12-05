import { Card } from "react-bootstrap";
import OrderType from "./OrderType";
import widgetClasses from "./Widget.module.css";
import classes from './OrdersWidget.module.css'

function OrdersWidget(props) {
  return (
    <div>
      <Card className={widgetClasses.basicShape}>
        <Card.Body>
          <Card.Title className={widgetClasses.titleStyle}>Orders</Card.Title>
          <div className={classes.mainStructure}>
            <div>
              <OrderType orderType={"unpaid"} quantity={20} />
              <OrderType orderType={"not send"} quantity={10} />
              <OrderType orderType={"returns"} quantity={0} />
            </div>
            <div>
                <p>elo</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrdersWidget;
