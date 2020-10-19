import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Pages/Home'
import Checkout from './components/Pages/CheckOutPage'
import Sucessfull from './components/Pages/Sucessfull'
import Failed from './components/Pages/Failed'
import Otp from './components/Pages/Otp'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Home/> } />
        <Route exact path='/checkout' component={() => <Checkout/> } />
        <Route exact path='/sucessfull' component={() => <Sucessfull/> } />
        <Route exact path='/failed' component={() => <Failed/> } />
        <Route exact path='/otpauth' component={() => <Otp/> } />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
