import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { IntlProvider } from 'react-intl';

const root = ReactDOM.createRoot(document.getElementById('root'));
const mensajes = {
  "en" : localeEnMessages, 
  "es" : localeEsMessages
}
const language = navigator.language.split('-')[0]; 
root.render(
  <React.StrictMode>
    <IntlProvider locale = {mensajes[language]? language:"en"}  messages= {mensajes[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
