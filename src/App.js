import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import  Dashboard from './pages/Dashboard'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import "./i18n";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./theme";
import {GlobalStyles} from "./global";

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
          <GlobalStyles />
        <div>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/login" element={<LoginPage value={t} changeLanguage={changeLanguageHandler} />} />
            <Route path="/dashboard" element={<Dashboard toggleTheme={toggleTheme} />} />
          </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
