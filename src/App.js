import React from 'react';
import Product from './components/Product';
import { useSelector } from 'react-redux';
import { selectItemsCount } from './features/basketSlice';

function App() {
  const numberOfItemsInBasket = useSelector(selectItemsCount);
  console.log('The items are ', numberOfItemsInBasket);

  return (
    <div>
      <header className='p-4 flex justify-between items-center'>
        <div>
          <h1 className='text-5xl'>PAPA's Store</h1>
          <h2>Your no. 1 store for react stuff</h2>
        </div>
        <div>
          <h3>Items in your basket: {numberOfItemsInBasket} </h3>
        </div>
      </header>
      <Product id='123' title='iPad Pro 2021' />
      <Product id='1234' title='Soft Skills by John Sonmez' />
      <Product id='1235' title='Rubiks Cube' />

      {/* Product */}

      {/* Product */}
    </div>
  );
}

export default App;
