export function BasketItem({
  id,
  name,
  price,
  quantity,
  deleteFromBasket,
  updateQuantity,
}) {
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
      <span class='secondary-content'>
        <i
          class='material-icons basket-delete'
          onClick={() => deleteFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}
