import widgetClasses from "../../layout/widget/Widget.module.css";
import { Card } from "react-bootstrap";
import ListedItem from "./ListedItem";
import classes from './OffersRankingWidget.module.css'
import {StyledOffersRankingWitget} from "./StyledOffersRaningWidget.styled";

function OffersRankingWidget(){
  var text ="Offer: Lorem ipsum dolor sit amet, consectetur dfgh adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  return (
    <StyledOffersRankingWitget>
        <Card className={widgetClasses.basicShape}>
          <Card.Body>
            <Card.Title className={widgetClasses.titleStyle}>Offers' Ranking</Card.Title>
            <div className={classes.mainStructure}>
                <ListedItem category={"Top selling"} offerName={text} />
                <ListedItem category={"Least selling"} offerName={text} />
            </div>
          </Card.Body>
        </Card>
    </StyledOffersRankingWitget>
        
      
    );
}

export default OffersRankingWidget;