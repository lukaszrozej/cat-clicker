const body = document.querySelector('body');

const catList = new CatList(document.querySelector('.cat-display'));

catList.add(new Cat('Claudio', 'img/claudio.jpg'));
catList.add(new Cat('Igor', 'img/igor.jpg'));
catList.add(new Cat('Ottorino', 'img/ottorino.jpg'));
catList.add(new Cat('Bela', 'img/bela.jpg'));
catList.add(new Cat('Fryderyk', 'img/fryderyk.jpg'));

catList.appendTo(body);
catList.displayCat(0);