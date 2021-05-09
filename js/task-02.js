const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeItems = items => {
   return items.map(item => {
        const itemEl = document.createElement('li');
        itemEl.textContent = item;

        return itemEl;
    })
}

const items = makeItems(ingredients);

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...items);