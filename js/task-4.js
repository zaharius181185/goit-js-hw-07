'use strict'

const counterRef = document.querySelector("#counter");
const buttonIncrementRef = document.querySelector(
    "button[data-action='increment']"
  );
  const buttonDecrementRef = document.querySelector(
    "button[data-action='decrement']"
  );
  const valueRef = document.getElementById("value");
  
  const valueIncrement = () => {
    ++valueRef.textContent;
  };
  
  const valueDecrement = () => {
    --valueRef.textContent;
  };
  
  buttonIncrementRef.addEventListener("click", valueIncrement);
  
  buttonDecrementRef.addEventListener("click", valueDecrement);





// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса