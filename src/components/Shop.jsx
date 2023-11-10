import React, { useState, useEffect } from 'react';
import { API_KYE, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className='container content'>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
