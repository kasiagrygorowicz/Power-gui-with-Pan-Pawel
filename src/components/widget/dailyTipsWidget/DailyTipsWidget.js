import Tip from './Tip'
import { Card } from "react-bootstrap";
import widgetClasses from "../../layout/widget/Widget.module.css";
import classes from "./DailyTipsWidget.module.css"
import { StyledDailyTipsWitget } from "./StyledDailyTipsWidget.styled";
import {useTranslation} from "react-i18next";

function DailyTipsWidget(){
    const t = useTranslation()[0];
    var tip="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
return(
    <StyledDailyTipsWitget>

<Card className={widgetClasses.basicShape}>
<Card.Body>
  <Card.Title className={widgetClasses.titleStyle}>{t("dailyTips")}</Card.Title>
  <div className={classes.mainStructure}>
        <Tip tip={tip}/>
        <Tip tip={tip}/>
        <Tip tip={tip}/>
    </div>
</Card.Body>
</Card>
    </StyledDailyTipsWitget>
)
}

export default DailyTipsWidget;