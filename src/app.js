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

  App.prototype.renderHistory = function(historyDepth, depth) {
    this.history = new History({historyDepth, depth});
    this.el.appendChild(this.history.render().el);
  }

  App.prototype.eventCallback = function(options) {
    let message = options.message;
    if(message === 'restartGame') {
      this.render();
    } else if(message === 'updateHistory') {
      this.renderHistory(options.historyDepth , options.depth);
    }
  }

  exports.App = App;

})(window, document)