import { useEffect, useContext } from 'react';
import { ShopContext } from '../Context';

export function Alert() {
  const { alertName = '', closeALert } = useContext(ShopContext);

  useEffect(() => {
    const timerID = setTimeout(closeALert, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [alertName]);
  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} add in basket</div>
    </div>
  );
}
