class CatList {
  constructor(catDisplay) {
    this.cats = [];
    this.catDisplay = catDisplay;

    console.log(this.catDisplay)

    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('cats');
    this.element.innerHTML = `
      <h2 class="cat-list-header">Cats:</h2>
      <ul class="cat-list"></ul>`;
    this.list = this.element.querySelector('.cat-list');
  }

  appendTo(element) {
    element.appendChild(this.element);
  }

  add(cat) {
    const catListItem = document.createElement('li');
    catListItem.classList.add('cat-item');
    catListItem.textContent = cat.name;
    catListItem.dataset.id = this.cats.length;
    catListItem.addEventListener('click',
      () => this.displayCat(catListItem.dataset.id)
    );

    this.list.appendChild(catListItem);

    this.cats.push(cat);
  }

  displayCat(id) {
    this.catDisplay.innerHTML = '';
    this.cats[id].appendTo(this.catDisplay);
  }
}