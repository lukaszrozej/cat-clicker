const body = document.querySelector('body');

const model = {
  cats: [
    { name: 'Claudio', url: 'img/claudio.jpg', clicks: 0, },
    { name: 'Igor', url: 'img/igor.jpg', clicks: 0, },
    { name: 'Ottorino', url: 'img/ottorino.jpg', clicks: 0, },
    { name: 'Bela', url: 'img/bela.jpg', clicks: 0, },
    { name: 'Fryderyk', url: 'img/fryderyk.jpg', clicks: 0, },
  ],
  currentCat: 0,
  adminModeIsOn: false,
};

const octopus = {
  init: function() {
    listView.init();
    catView.init();
    adminView.init();
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(id) {
    model.currentCat = id;
    catView.render();
    adminView.render();
  },

  getCurrentCat: function() {
    return model.cats[model.currentCat];
  },

  clickCurrentCat: function() {
    model.cats[model.currentCat].clicks++;
    catView.render();
  },

  turnAdminModeOn: function() {
    model.adminModeIsOn = true;
    adminView.render();
  },

  turnAdminModeOff: function() {
    model.adminModeIsOn = false;
    adminView.render();
  },

  updateCurrentCat(cat) {
    model.cats[model.currentCat] = cat;
    listView.render();
    catView.render();
  },

  adminModeIsOn() {
    return model.adminModeIsOn;
  }
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
    this.counterElement.textContent = cat.clicks;
  },
}

adminView = {
  init: function() {
    this.form = document.querySelector('.admin-form');
    this.nameInput = document.querySelector('#name-input');
    this.urlInput = document.querySelector('#url-input');
    this.clicksInput = document.querySelector('#clicks-input');

    document.querySelector('.admin-btn')
      .addEventListener('click', event => octopus.turnAdminModeOn() );

    document.querySelector('.cancel-btn')
      .addEventListener('click', event => octopus.turnAdminModeOff() );

    document.querySelector('.save-btn')
      .addEventListener('click', event =>
        octopus.updateCurrentCat({
          name: this.nameInput.value,
          url: this.urlInput.value,
          clicks: this.clicksInput.value,
        })
      );

    this.render();
  },

  render() {
    if (octopus.adminModeIsOn()) {
      const cat = octopus.getCurrentCat();
      this.nameInput.value = cat.name;
      this.urlInput.value = cat.url;
      this.clicksInput.value = cat.clicks;
      this.form.classList.remove('hidden');
    } else {
      this.form.classList.add('hidden');
    }
  }
}

octopus.init();