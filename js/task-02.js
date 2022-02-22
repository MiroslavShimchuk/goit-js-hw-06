const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsUl = ingredients.map( element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

const ingredientsUlEl = document.querySelector('#ingredients');
ingredientsUlEl.append(...makeIngredientsUl);