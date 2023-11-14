import React, { useState, useEffect } from 'react';
import { API_KYE, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  function addToBasket(item) {
    const itemIndex = order.findIndex((elem) => elem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((elem, i) => {
        if (i === itemIndex) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        } else {
          return elem;
        }
      });
      setOrder(newOrder);
    }

    setAlertName(item.name);
  }

  function deleteFromBasket(id) {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  }

  function handleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KYE,
      },
    })
      .then((repsonse) => repsonse.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  function updateQuantity(id, count) {
    const newOrder = order
      .map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            quantity: elem.quantity + count,
          };
        } else {
          return elem;
        }
      })
      .filter((elem) => elem.quantity !== 0);

    setOrder(newOrder);
  }

  function closeAlert() {
    setAlertName('');
  }

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          deleteFromBasket={deleteFromBasket}
          updateQuantity={updateQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
