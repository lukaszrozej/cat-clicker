let counter = 0;

document.querySelector('.cat').addEventListener('click', function() {
  counter++;
  document.querySelector('.counter').textContent = counter;
});