import AnnualScore from './AnnualScore'
import classes from './SalesQualityWidget.module.css'
import widgetClasses from "../../layout/widget/Widget.module.css";
import {Card, Col} from "react-bootstrap";
import Improvement from './Improvement';
import { StyledSalesQualityWitget } from "./StyledSalesQualityWidget.styled";
import {useTranslation} from "react-i18next";
import Widget from "../../layout/widget/Widget";

function SalesQualityWidget(){
    const t = useTranslation()[0]
    const score = "4/5";
    const aspects = [
        t("salesQuality.aspects.1"),
        t("salesQuality.aspects.2"),
        t("salesQuality.aspects.3"),
        t("salesQuality.aspects.4"),
        t("salesQuality.aspects.5")
    ]
return(
  <StyledSalesQualityWitget>
      <Widget className={"widgetClasses.basicShape"}>
    <Card.Body>
      <Card.Title className={widgetClasses.titleStyle}>{t("salesQualityW")}</Card.Title>
      <div className={classes.mainStructure}>
      <AnnualScore t={t} score={score}/>
      <Improvement t={t}aspect1={aspects[0]} aspect2={aspects[1]} aspect3={aspects[2]}/>
      </div>
    </Card.Body>
      </Widget>
  </StyledSalesQualityWitget>
)
}

export default SalesQualityWidget;