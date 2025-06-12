const select = document.querySelector('.sorting-select');
const grid = document.querySelector('.products-grid');
  
select.addEventListener('change', () => {
    const direction = select.value;
    const cards = Array.from(grid.querySelectorAll('.product-card'));
  
cards.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('.product-price').textContent);
    const priceB = parseFloat(b.querySelector('.product-price').textContent);
    return direction === 'up' ? priceA - priceB : priceB - priceA;
});
  
cards.forEach(card => grid.appendChild(card));
});