import React from 'react';
import classes from './MyButton.module.css';

function MyButton({ children, ...props }) {
  return (
    // Стили подключены с помощью модуля, за счет чего класс
    // имеет уникальное название без использования БЭМ
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
}

export default MyButton;
