(function(exports, doc) {
  'use strict'
  function Player(options) {
    this.image = options.image;
    this.id = options.id;
    this.name = options.name;
    this.depth = options.depth;
    this.played = options.played;
    this.className = options.className || '';
    this.eventCallback = options.eventCallback;
  }

  Player.prototype.render = function() {
    let temp = document.createElement('div');
    temp.innerHTML = `<div class="player_wrap ${this.className}">
                        <div class="player_imgbox">
                          <img class="player_img" src="${this.image}">
                        </div>
                        ${this.renderName()}
                        <div class="player_overlay"></div>
                      </div>`;
    this.el = temp.querySelector('.player_wrap');
    this.html = this.el.parentNode.innerHTML;
    if(this.eventCallback) {
      this.playerBtn = this.el.querySelector('.player_btn');
      this.bindEvents();
    }
    return this;
  }

  Player.prototype.renderName = function() {
    if(this.eventCallback) {
      return `<button class="player_btn" data-id="${this.id}">${this.name}</button>`;
    } else {
      return `<span class="player_name">${this.name}</span>`;
    }
  }

  Player.prototype.bindEvents = function() {
    this.playerBtn.addEventListener('click', () => {
      if(this.eventCallback && typeof this.eventCallback === 'function') {
        this.eventCallback(this.id);
      }
    });
  }

  exports.app = exports.app || {};
  exports.app.Player = Player;

})(window, document)