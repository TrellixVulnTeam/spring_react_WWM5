import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss';
import i18next from "i18next";
import UserSignupPage from "./pages/UserSignupPage";
import LoginPage from "./pages/LoginPage";
import LanguageSelector from "./components/LanguageSelector";
import {I18nextProvider} from "react-i18next";
import reportWebVitals from './reportWebVitals';
import './i18n';
import ApiProgress from "./shared/ApiProgress";
import App from "./container/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
