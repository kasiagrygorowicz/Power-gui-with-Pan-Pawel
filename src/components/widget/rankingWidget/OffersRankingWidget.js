import widgetClasses from "../widget/Widget.module.css";
import { Card } from "react-bootstrap";
import ListedItem from "./ListedItem";
import classes from './OffersRankingWidget.module.css'
import {StyledOffersRankingWitget} from "./StyledOffersRaningWidget.styled";
import Widget from "../widget/Widget";

function OffersRankingWidget(){
  var text ="Offer: Lorem ipsum dolor sit amet, consectetur dfgh adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  return (
    <StyledOffersRankingWitget>
        <Widget className={"widgetClasses.basicShape"}>
        <Card className={widgetClasses.basicShape}>
          <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>Offers' Ranking</Card.Title>
            <div className={classes.mainStructure}>
                <ListedItem category={"Top selling"} offerName={text} />
                <ListedItem category={"Least selling"} offerName={text} />
            </div>
          </Card.Body>
        </Card>
        </Widget>
    </StyledOffersRankingWitget>
        
      
    );
}

export default OffersRankingWidget;