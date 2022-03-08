import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateContextProvider } from './context/StateProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/FindHome/LandingPage';
import { FindHome, SellProperty, ManageRentals, HomeLoans } from './utilities/LandingData'
import reducer, { initialState } from './reducer/reducer';

ReactDOM.render(

    <BrowserRouter>
        <StateContextProvider reducer={reducer}>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>

                <Route path="/Find-A-Home" exact>
                    <LandingPage data={FindHome} />
                </Route>

                <Route path="/Sell-A-Property" exact>
                    <LandingPage data={SellProperty} />
                </Route>
                <Route path="/Manage-Rentals" exact>
                    <LandingPage data={ManageRentals} />
                </Route>
                <Route path="/Home-Loans" exact>
                    <LandingPage data={HomeLoans} />
                </Route>

                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </StateContextProvider>
    </BrowserRouter>

    , document.getElementById('root'));
