import { useEffect } from 'react';

export function Alert({ name = '', closeAlert }) {
  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [name]);
  return (
    <div id='toast-container'>
      <div className='toast'>{name} add in basket</div>
    </div>
  );
}
