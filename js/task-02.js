const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.getElementById('ingredients');

const ingredientsElements = ingredients.map(element => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add('item');
  return ingredientsItem;
});

ingredientsList.append(...ingredientsElements);
console.log(ingredientsList);
