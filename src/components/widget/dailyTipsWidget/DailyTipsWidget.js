import Tip from './Tip'
import { Card } from "react-bootstrap";
import widgetClasses from "../../layout/widget/Widget.module.css";
import classes from "./DailyTipsWidget.module.css"
import { StyledDailyTipsWitget } from "./StyledDailyTipsWidget.styled";

function DailyTipsWidget(){
    var text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
return(
    <StyledDailyTipsWitget>

<Card className={widgetClasses.basicShape}>
<Card.Body>
  <Card.Title className={widgetClasses.titleStyle}>Daily Tips</Card.Title>
  <div className={classes.mainStructure}>
        <Tip tip={text}/>
        <Tip tip={text}/>
        <Tip tip={text}/>
    </div>
</Card.Body>
</Card>
    </StyledDailyTipsWitget>
)
}

export default DailyTipsWidget;