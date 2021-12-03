
import { Route, Routes } from "react-router-dom";
import  Dashboard from './pages/Dashboard'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return (
    <div>
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/login" element={<LoginPage value={t} changeLanguage={changeLanguageHandler} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
</div>
    
  );
}

export default App;
