import TopNavBar from "../components/layout/navbar/TopNavBar";
import OrdersWidget from "../components/widget/ordersWidget/OrdersWidget";
import OffersRankingWidget from "../components/widget/rankingWidget/OffersRankingWidget";
import { useTranslation } from "react-i18next";
import DailyTipsWidget from "../components/widget/dailyTipsWidget/DailyTipsWidget";
import SalesQualityWidget from '../components/widget/salesQualityWidget/SalesQualityWidget'

import Footer from '../components/layout/footer/Footer'
import {FooterStyled} from "../components/layout/footer/Footer.styled";
import ClientsOpinionsWidget from "../components/widget/clientsOpinionsWidget/ClientsOpinionsWidget";

function Dashboard(props) {
  const { t,i18n } = useTranslation();
   

  return (<div>

 <OrdersWidget />
 <OffersRankingWidget/>
 <DailyTipsWidget/>
 <SalesQualityWidget/>
 <ClientsOpinionsWidget/>
 <Footer/>
 


</div>
  );
}
export default Dashboard;
