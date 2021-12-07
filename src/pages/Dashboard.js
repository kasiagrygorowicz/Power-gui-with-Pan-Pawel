import { StyledDashboard } from "./Dashboard.styled";

import TopNavBar from "../components/layout/navbar/TopNavBar";


import { useTranslation } from "react-i18next";
import DailyTipsWidget from "../components/widget/dailyTipsWidget/DailyTipsWidget";


import Footer from "../components/layout/footer/Footer";
import { FooterStyled } from "../components/layout/footer/Footer.styled";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import SalesQualityWidget from "../components/widget/salesQualityWidget/SalesQualityWidget";
import OrdersWidget from "../components/widget/ordersWidget/OrdersWidget";
import ClientsOpinionsWidget from "../components/widget/clientsOpinionsWidget/ClientsOpinionsWidget";
import SalesChartWidget from "../components/widget/salesChart/SalesChartWidget";
import OffersRankingWidget from "../components/widget/rankingWidget/OffersRankingWidget";





function Dashboard(props) {
  const { t, i18n } = useTranslation();
  const data=[10,20,30]

  return (
    <div>
      <StyledDashboard>
        <Container className={classes.mainStructure}>
          <Row>
            <Col>
              <OrdersWidget quantity={data}/>
              <SalesChartWidget/>
            </Col>
            <Col>
              <DailyTipsWidget />
            </Col>
            <Col>
              
              <SalesQualityWidget />
            </Col>
          </Row>

          <Col>
            <Row style={{ rowGap: "20px" }}>
              <DailyTipsWidget />
              <SalesQualityWidget />
            </Row>
          </Col>
           <OffersRankingWidget/>
          <ClientsOpinionsWidget/>
        </Container>
      </StyledDashboard>
      <Footer />
    </div>
  );
}
export default Dashboard;
