'use strict'

const fragment = document.createElement('ul.ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const addItemIngredients = ingredients.map((ingredient) => {
    const ingredientItemRef = document.createElement("li");
    ingredientItemRef.textContent = ingredient;
    fragment.appendChild(ingredientItemRef);
    return fragment;
    }
);

console.log(fragment)


// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().