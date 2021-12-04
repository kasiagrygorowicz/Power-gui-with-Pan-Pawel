import TopNavBar from "../components/TopNavBar";
import OrdersWidget from "../components/OrdersWidget";
import { useTranslation } from "react-i18next";



function Dashboard(props) {
  const { t,i18n } = useTranslation();
   

  return (<div>
 <TopNavBar lt={t} i18n={i18n.changeLanguage} toggleTheme={props.toggleTheme}/>
 <OrdersWidget />
 


</div>
  );
}
export default Dashboard;
