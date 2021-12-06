import {Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import widgetClasses from "../../layout/widget/Widget.module.css";
import classes from "./ClientsOpinions.module.css"
import {ClientsOpinionsStyled} from "./ClientsOpinions.styled";
import { Start } from "react-bootstrap-icons";
import Opinion from "./Opinion";

function ClientsOpinionsWidget(){
    let opinion1 = "Produkty wystawione przez sprzedawcę takie sobie, ale za to cena nie jest taka wysoka. ";
    let opinion2 = "";
    let opinion3 = "Cóż napisać ... jestem bardzo zadowolony. Szukałem w sieci różnych rozwiązań i trafiłem przez przypadek na tego sprzedawcę. Po zapoznaniu się z możliwościami sklepu dokonałem zakupu - cena niewielka - w sumie dużo nie ryzykowałem - brak umów więc w razie czego tylko utopione kilka złotych. Jednak się nie zawiodłem. Zarówno możliwości sklepu jak i jego obsługa posprzedaży są na najwyższym poziomie. Właśnie kupuję kolejny towar i jak najbardziej mogę wszystkim polecić. Bardzo dobra cena w stosunku do jakości.";
    let opinion4 = "O ile obsługa w sklepie jest ok, o tyle dział rat w arogancki i w ogóle nie wykazujący zainteresowania klientem, obsługa “z musu\", suma sumarum zrezygnowałem z zakupu produktu, który miałem na oku. A wielka szkoda, bo długo przymierzałem się...";

    return(
        <ClientsOpinionsStyled>
            <Card.Body>
                <Container>
                    <Card.Title className={widgetClasses.titleStyle}>Clients opinions</Card.Title>
                    <Row>
                        <div className={classes.flex}>
                            <Dropdown align={"end"}>
                                <Dropdown.Toggle className={classes.dropDown}>
                                    All opinions
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Positive</Dropdown.Item>
                                    <Dropdown.Item>Negative</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Row>
                    <Row>
                        <Opinion description={opinion1}/>
                        <Opinion description={opinion2}/>
                        <Opinion description={opinion3}/>
                        <Opinion description={opinion4}/>
                    </Row>

                </Container>

            </Card.Body>
        </ClientsOpinionsStyled>
    )
}

export default ClientsOpinionsWidget;