(function(exports, doc) {
  'use strict';
  function App(el) {
    this.el = el;
    this.players = exports.data.idealWoman;
    this.render();
  }

  App.prototype.render = function() {
    this.el.innerHTML = '';
    this.game = new Game({
      players: this.players,
      eventCallback: this.eventCallback.bind(this)
    });
    this.el.appendChild(this.game.render().el);
  }

  App.prototype.renderHistory = function() {
    if(this.history) { this.history.empty(); }
    this.history = new History({
      players: this.game.players
    });
    this.el.appendChild(this.history.render().el);
  }

  App.prototype.eventCallback = function(options) {
    let message = options.message;
    if(message === 'render') {
      this.render();
    } else if(message === 'updateHistory') {
      // this.players = options.players;
      // this.renderHistory();
    }
  }

  exports.App = App;

})(window, document)