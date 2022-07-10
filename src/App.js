import React from 'react';
import Product from './components/Product';
import BasketView from './components/BasketView';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='p-4'>
      <Router>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <BasketView />
          </Route>
          <Route path='/'>
            <div>
              <Product id='123' title='iPad Pro 2021' price={2000} />
              <Product
                id='1234'
                title='Soft Skills by John Sonmez'
                price={40}
              />
              <Product id='1235' title='Rubiks Cube' price={5} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
