import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import  Dashboard from './pages/Dashboard'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import "./i18n";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./theme";
import {GlobalStyles} from "./global";
import Layout from "./components/layout/Layout"

function App() {

  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <I18nextProvider i18n={i18next}>
          <GlobalStyles />
            <Layout toggleTheme={toggleTheme}>
              <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/login" element={<LoginPage value={t} changeLanguage={changeLanguageHandler} theme={theme} />} />
                <Route path="/dashboard" element={<Dashboard  />} />
              </Routes>
            </Layout>
            </I18nextProvider>
      </ThemeProvider>
  );
}

export default App;
