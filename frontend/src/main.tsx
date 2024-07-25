import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
//import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNaviagte";
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from "react-query";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={new QueryClient}>
       <Auth0Provider
          domain="dev-13hbv1vlornvvrsp.us.auth0.com" 
          clientId="399E40BYvXFPImxumulAduZT9stFN664"
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_AUDIENCE
          }}
        >
            <AppRoutes />
        </Auth0Provider>
        </QueryClientProvider>
      
    </Router>
  </React.StrictMode>
);












  /**root.render(
<Auth0Provider
    domain="{yourDomain}"
    clientId="{yourClientId}"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
); */
