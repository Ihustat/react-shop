import { useContext } from 'react';
import { ShopContext } from '../Context';
import { GoodsItem } from './GoodsItem';

export function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  return !goods.length ? (
    <h3>No goods</h3>
  ) : (
    <div className='goods'>
      {goods.map((good) => (
        <GoodsItem key={good.mainId} {...good} />
      ))}
    </div>
  );
}
