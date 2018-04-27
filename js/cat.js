class Cat {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.counter = 0

    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('cat');
    this.element.innerHTML = `
      <h2 class="cat-name">${this.name}</h2>
      <img class="cat-image" src="${this.image}">
      <p class="cat-text">Number of clicks:</p>
      <p class="cat-text cat-counter">0</p>`
    this.counterElement = this.element.querySelector('.cat-counter');

    this.element
      .querySelector('.cat-image')
      .addEventListener('click', this.click.bind(this));
  }

  appendTo(element) {
    element.appendChild(this.element);
  }

  update() {
    this.counterElement.textContent = this.counter;
  }

  click() {
    this.counter++;
    this.update();
  }
}