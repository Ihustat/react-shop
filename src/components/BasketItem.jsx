import { useContext } from 'react';
import { ShopContext } from '../Context';

export function BasketItem({ id, name, price, quantity }) {
  const { deleteFromBasket, updateQuantity } = useContext(ShopContext);

  return (
    <li className='collection-item'>
      {name} x{' '}
      <span
        className='item-span blue darken-4 white-text'
        onClick={() => updateQuantity(id, -1)}
      >
        -
      </span>{' '}
      {quantity}{' '}
      <span
        className='item-span blue darken-4 white-text'
        onClick={() => updateQuantity(id, 1)}
      >
        +
      </span>{' '}
      = ${price * quantity}
      <span className='secondary-content'>
        <i
          className='material-icons basket-delete'
          onClick={() => deleteFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}
