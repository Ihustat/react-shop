import { BasketItem } from './BasketItem';

export function BasketList({
  order = [],
  handleBasketShow,
  deleteFromBasket,
  updateQuantity,
}) {
  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            deleteFromBasket={deleteFromBasket}
            updateQuantity={updateQuantity}
          />
        ))
      ) : (
        <li className='collection-item '>Nothing here!</li>
      )}
      <li className='collection-item active'>Total price: ${totalPrice}</li>
      <i class='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
