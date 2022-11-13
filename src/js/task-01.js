const categories = document.querySelectorAll('.item');
const arrCategories = Array.from(categories).map(item => {
  return {
    category: item.querySelector('h2').textContent,
    elements: item.querySelectorAll('ul > li').length,
  };
});

console.log(`Number of categories: ${categories.length}`);

arrCategories.forEach(element => {
  console.log(`\nCategory: ${element.category}`);
  console.log(`Elements: ${element.elements}`);
});
