import widgetClasses from "../widget/Widget.module.css";
import {Card, Container, Dropdown, Row} from "react-bootstrap";
import ListedItem from "./ListedItem";
import classes from './OffersRankingWidget.module.css'
import {StyledOffersRankingWitget} from "./StyledOffersRaningWidget.styled";
import Widget from "../widget/Widget";
import {ClientsOpinionsStyled} from "../clientsOpinionsWidget/ClientsOpinions.styled";
import Opinion from "../clientsOpinionsWidget/Opinion";

function OffersRankingWidget(){
  var text ="Offer: Lorem ipsum dolor sit amet, consectetur dfgh adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    return (
        <StyledOffersRankingWitget>
                <Card.Body>
                    <Container>
                        <Card.Title className={widgetClasses.titleStyle}>Offers' ranking</Card.Title>
                        <Row>
                            <div className={classes.flex}>
                                <Dropdown align={"end"}>
                                    <Dropdown.Toggle className={classes.dropDown}>
                                        Options
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Najczęściej kupowane</Dropdown.Item>
                                        <Dropdown.Item>Najrzadziej kupowane</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Row>
                        <Row>
                            <ListedItem description={text}/>
                            <ListedItem description={text}/>
                            <ListedItem description={text}/>
                            <ListedItem description={text}/>
                            <ListedItem description={text}/>
                        </Row>

                    </Container>

                </Card.Body>
        </StyledOffersRankingWitget>
    );
}

export default OffersRankingWidget;