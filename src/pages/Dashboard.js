import TopNavBar from "../components/layout/TopNavBar";
import OrdersWidget from "../components/OrdersWidget";
import { useTranslation } from "react-i18next";



function Dashboard(props) {
  const { t,i18n } = useTranslation();
   

  return (<div>

 <OrdersWidget />
 


</div>
  );
}
export default Dashboard;
