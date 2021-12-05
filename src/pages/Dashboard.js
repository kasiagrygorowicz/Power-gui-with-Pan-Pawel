import TopNavBar from "../components/layout/TopNavBar";
import OrdersWidget from "../components/ordersWidget/OrdersWidget";
import OffersRankingWidget from "../components/rankingWidget/OffersRankingWidget";
import { useTranslation } from "react-i18next";
import DailyTipsWidget from "../components/dailyTipsWidget/DailyTipsWidget";



function Dashboard(props) {
  const { t,i18n } = useTranslation();
   

  return (<div>

 <OrdersWidget />
 <OffersRankingWidget/>
 <DailyTipsWidget/>
 


</div>
  );
}
export default Dashboard;
