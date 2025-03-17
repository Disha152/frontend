import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import GridBackground from './components/ui/GridBackground.jsx'
import {ApolloClient, InMemoryCache,ApolloProvider} from "@apollo/client"
 
const client = new ApolloClient({
  uri: "https://backend-v7m3.onrender.com/graphql", // Use the deployed backend
  cache: new InMemoryCache(),
  credentials: "include",
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <GridBackground>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    
    </GridBackground>
    </BrowserRouter>
  </React.StrictMode>,
)
