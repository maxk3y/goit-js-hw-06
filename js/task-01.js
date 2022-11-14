const categories = document.querySelectorAll('.item');
const arrCategories = Array.from(categories).map(item => {
  return {
    category: item.firstElementChild.textContent,
    elements: item.lastElementChild.children.length,
  };
});

console.log(`Number of categories: ${categories.length}`);

arrCategories.forEach(element => {
  console.log(`\nCategory: ${element.category}`);
  console.log(`Elements: ${element.elements}`);
});
