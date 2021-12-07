import { Card } from "react-bootstrap";
import OrderType from "./OrderType";

import classes from './OrdersWidget.module.css'
import OrdersSummary from "./OrdersSummary";
import widgetClasses  from '../widget/Widget.module.css'
import { StyledOrdersWitget } from './OrdersWidget.styled';
import { useTranslation } from "react-i18next";
import Widget from "../widget/Widget";



function OrdersWidget(props) {
  const   {t}  = useTranslation()
  return (
      <StyledOrdersWitget>
        <Widget className={"widgetClasses.basicShape"}>
          <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>{t("ordersW")}</Card.Title>
            <div className={classes.mainStructure}>
              <div className={classes.ordersPosition}>
                <OrderType orderType={t("orders.notpaid")} quantity={props.quantity[0]} />
                <OrderType orderType={t("orders.notsend")} quantity={props.quantity[1]} />
                <OrderType orderType={t("orders.returns")} quantity={props.quantity[2]} />
              </div>
              <div className={classes.ordersSummaryPosition}>
                <OrdersSummary msg={t("orders.msg")}allOrders={30}/>
              </div>
            </div>
          </Card.Body>
        </Widget>
      </StyledOrdersWitget>


  );
}

export default OrdersWidget;
