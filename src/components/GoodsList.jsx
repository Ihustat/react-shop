import { GoodsItem } from './GoodsItem';

export function GoodsList({ goods = [] }) {
  return !goods.length ? (
    <h3>No goods</h3>
  ) : (
    <div className='goods'>
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} />
      ))}
    </div>
  );
}
