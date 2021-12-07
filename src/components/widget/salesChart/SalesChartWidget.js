import Widget from "../widget/Widget";
import widgetClasses from "../widget/Widget.module.css";
import imag from './chart.png';

import Tip from "../dailyTipsWidget/Tip";
import {useTranslation} from "react-i18next";
import { Card } from "react-bootstrap";
import {Bucket} from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';


function SalesChartWidget(){
    const t = useTranslation()[0]
return(
    <Widget>
        <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>{t("salesChartW")}</Card.Title>
            <div>
            <div className={'image'} style={{ width: '250px' }}>
              <img src={imag} style={{ height: '170px', width: '250px', paddingLeft: '25px', display: 'flex' }} />
            </div>
          <div className={'chart-but'} >
            <span>Select time</span>
            <Button>Last day</Button><br />
            <Button>Last week</Button><br />
            <Button>Last yesr</Button>
          </div>
            </div>
        </Card.Body>
    </Widget>
)
}
export default SalesChartWidget;