import widgetClasses from "../widget/Widget.module.css";
import {Card, Container, Dropdown, Row} from "react-bootstrap";
import ListedItem from "./ListedItem";
import classes from './OffersRankingWidget.module.css'
import {StyledOffersRankingWitget} from "./StyledOffersRaningWidget.styled";
import Widget from "../widget/Widget";
import {ClientsOpinionsStyled} from "../clientsOpinionsWidget/ClientsOpinions.styled";
import Opinion from "../clientsOpinionsWidget/Opinion";
import {useTranslation} from "react-i18next";

function OffersRankingWidget(){
  var text ="Offer: Lorem ipsum dolor sit amet, consectetur dfgh adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const t = useTranslation()[0]
    return (
        <StyledOffersRankingWitget>
                <Card.Body>
                    <Container>
                        <Card.Title className={widgetClasses.titleStyle}>{t("offersRankingW")}</Card.Title>
                        <Row>
                            <div className={classes.flex}>
                                <Dropdown align={"end"}>
                                    <Dropdown.Toggle className={classes.dropDown}>
                                        Options
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>{t("offersRanking.mfb")}</Dropdown.Item>
                                        <Dropdown.Item>{t("offersRanking.lfb")}</Dropdown.Item>
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