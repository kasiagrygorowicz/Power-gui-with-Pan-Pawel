import AnnualScore from './AnnualScore'
import classes from './SalesQualityWidget.module.css'
import widgetClasses from "../Widget.module.css";
import { Card } from "react-bootstrap";
import Improvement from './Improvement';

function SalesQualityWidget(){
return(
    <Card className={widgetClasses.basicShape}>
    <Card.Body>
      <Card.Title className={widgetClasses.titleStyle}>Sales Quality</Card.Title>
      <div className={classes.mainStructure}>
      <AnnualScore/>
      <Improvement aspect1={"aspect1"} aspect2={"aspect2"} aspect3={"aspect3"}/>
      </div>
    </Card.Body>
  </Card>
)
}

export default SalesQualityWidget;