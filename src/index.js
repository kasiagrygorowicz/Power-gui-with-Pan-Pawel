import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import "../src/main.scss";
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);


