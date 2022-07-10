import React from 'react';
import { selectItemsCount } from '../features/basketSlice';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Header() {
  const numberOfItemsInBasket = useSelector(selectItemsCount);

  const history = useHistory();
  console.log('The items are ', numberOfItemsInBasket);

  return (
    <header className='flex justify-between items-center'>
      <div>
        <h1 onClick={() => history.push('/')} className='text-5xl'>
          PAPA's Store
        </h1>
        <h2>Your no. 1 store for react stuff</h2>
      </div>
      <div>
        <h3 onClick={() => history.push('/checkout')}>
          Items in your basket: {numberOfItemsInBasket}{' '}
        </h3>
      </div>
    </header>
  );
}

export default Header;
