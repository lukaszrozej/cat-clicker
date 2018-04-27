class CatList {
  constructor(catDisplay) {
    this.cats = [];
    this.catDisplay = catDisplay;

    console.log(this.catDisplay)

    this.createElement();
  }

  createElement() {
    this.element = document.createElement('ul');
    this.element.classList.add('cat-list');
  }

  appendTo(element) {
    element.appendChild(this.element);
  }

  add(cat) {
    const catListItem = document.createElement('li');
    catListItem.textContent = cat.name;
    catListItem.dataset.id = this.cats.length;
    catListItem.addEventListener('click',
      () => this.displayCat(catListItem.dataset.id)
    );

    this.element.appendChild(catListItem);

    this.cats.push(cat);
  }

  displayCat(id) {
    this.catDisplay.innerHTML = '';
    this.cats[id].appendTo(this.catDisplay);
  }
}