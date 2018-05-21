(function(exports, doc) {
  'use strict'
  function Player(options) {
    this.image = options.image;
    this.id = options.id;
    this.name = options.name;
    this.depth = options.depth;
    this.played = options.played;
    this.eventCallback = options.eventCallback;
  }

  Player.prototype.render = function() {
    let temp = document.createElement('div');
    temp.innerHTML = `<div class="card_wrap">
                        <img class="card_img" src="${this.image}">
                        <button class="card_btn" data-id="${this.id}">${this.name}</button>
                      </div>`;
    this.el = temp.querySelector('.card_wrap');
    this.cardBtn = this.el.querySelector('.card_btn');
    this.html = this.el.parentNode.innerHTML;
    this.bindEvents();
    return this;
  }

  Player.prototype.bindEvents = function() {
    this.cardBtn.addEventListener('click', () => {
      if(this.eventCallback && typeof this.eventCallback === 'function') {
        this.eventCallback(this.id);
      }
    });
  }

  exports.Player = Player;

})(window, document)