import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from './pages/checkoutPage';
import ThankYouPage from './pages/thankYouPage';
import Layout from './components/Layout';
import { MainProvider } from './context/mainContext';
import { BasketProvider } from './context/basketContext';
import LoyaltyDisplayPage from './pages/loyaltyDisplayPage';

function App() {
  return (
    <MainProvider>
      <BasketProvider>
        <Router>
          <Fragment>
            <Switch>
              <div className='App'>
                <Layout>
                  <Route exact path='/' component={CheckoutPage} />
                  <Route exact path='/thank-you' component={ThankYouPage} />
                  <Route exact path='/loyalty' component={LoyaltyDisplayPage} />
                </Layout>
              </div>
            </Switch>
          </Fragment>
        </Router>
      </BasketProvider>
    </MainProvider>
  );
}

export default App;
