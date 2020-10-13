'use strict'

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  nameRef.textContent = event.target.value;
  if (event.target.value.length === 0) {
    nameRef.textContent = "Незнакомец";
  }
});


// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.