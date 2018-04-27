const body = document.querySelector('body');

const model = {
  cats: [
    { name: 'Claudio', url: 'img/claudio.jpg', clickCount: 0, },
    { name: 'Igor', url: 'img/igor.jpg', clickCount: 0, },
    { name: 'Ottorino', url: 'img/ottorino.jpg', clickCount: 0, },
    { name: 'Bela', url: 'img/bela.jpg', clickCount: 0, },
    { name: 'Fryderyk', url: 'img/fryderyk.jpg', clickCount: 0, },
  ],
  currentCat: 0,
};

const octopus = {
  init: function() {
    listView.init();
    catView.init();
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(id) {
    model.currentCat = id;
    catView.render();
  },

  getCurrentCat: function() {
    return model.cats[model.currentCat];
  },

  clickCurrentCat: function() {
    model.cats[model.currentCat].clickCount++;
    catView.render();
  },
}

const listView = {
  init: function() {
    this.listElement = document.querySelector('.cat-list');
    this.listElement.addEventListener('click', event => {
      const item = event.target.closest('.cat-item');
      if (item === undefined) return;

      octopus.setCurrentCat(item.dataset.id);
    });

    this.render();
  },

  render: function() {
    this.listElement.innerHTML = octopus
      .getCats()
      .map( (cat, i) => `<li class="cat-item" data-id="${i}">${cat.name}</li>` )
      .join('');
  },
}

const catView = {
  init: function() {
    this.nameElement = document.querySelector('.cat-name');
    this.imgElement =  document.querySelector('.cat-image');
    this.counterElement =  document.querySelector('.cat-counter');

    this.imgElement.addEventListener('click', event => 
      octopus.clickCurrentCat()
    );

    this.render();
  },

  render: function() {
    const cat = octopus.getCurrentCat();
    this.nameElement.textContent = cat.name;
    this.imgElement.src = cat.url;
    this.counterElement.textContent = cat.clickCount;
  },
}

adminView = {
  init: function() {
    
  }
}

octopus.init();