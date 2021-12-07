import TopNavBar from "./navbar/TopNavBar";
import {useTranslation} from "react-i18next";


function Layout(props) {
    const { t,i18n } = useTranslation();
    return (
        <div>
            <TopNavBar lt={t} i18n={i18n.changeLanguage} toggleTheme={props.toggleTheme} theme={props.theme}/>
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;