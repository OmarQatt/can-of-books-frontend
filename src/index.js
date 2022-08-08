import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './assets/App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Auth0Provider
        domain="dev-mndvd8ab.us.auth0.com"
        clientId="gUt1ATbqqA05iOHK4n33iwMMYG5nqAvz"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
