import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import RocketDetails from "./pages/RocketDetails";


const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={true} element={<Home/>}/>
                    <Route path="/rocketDetails/:id" element={<RocketDetails/>}/>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>

);

reportWebVitals();
