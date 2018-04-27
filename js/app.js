const body = document.querySelector('body');

const cats = [
  new Cat('Claudio', 'img/claudio.jpg'),
  new Cat('Igor', 'img/igor.jpg'),
];


cats.forEach(cat => cat.appendTo(body));
