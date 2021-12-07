import Widget from "../widget/Widget";
import widgetClasses from "../widget/Widget.module.css";

import Tip from "../dailyTipsWidget/Tip";
import {useTranslation} from "react-i18next";
import { Card } from "react-bootstrap";


function SalesChartWidget(){
    const t = useTranslation()[0]
return(
    <Widget>
        <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>{t("salesChartW")}</Card.Title>
            <div>

                </div>


        </Card.Body>
    </Widget>
)
}
export default SalesChartWidget;