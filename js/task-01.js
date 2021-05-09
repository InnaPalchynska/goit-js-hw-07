const ulCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${ulCategoriesRef.length} категории.`);
ulCategoriesRef.forEach(el => console.log('Категория: ' + el.firstElementChild.textContent + '\n' + 'Количество элементов: ' + el.lastElementChild.childElementCount));


