class Cat {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.counter = 0
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('cat');
    this.element.innerHTML = `
      <h2>${this.name}</h2>
      <img class="cat-image" src="${this.image}">
      <p class='text'>Number of clicks:</p>
      <p class="text counter">0</p>`
    this.counterElement = this.element.querySelector('.counter');
  }

  append(element) {
    element.appendChild(this.element);
  }

  update() {
    this.counterElement.textContent = counter;
  }

  click() {
    counter++;
    update();
  }
}