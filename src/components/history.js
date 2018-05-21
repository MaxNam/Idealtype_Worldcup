(function(exports, doc) {
  'use strict'
  function History(options) {
    this.players = options.players;
    console.log('player[===', this.players)
  }

  History.prototype.render = function() {
    let $temp = document.createElement('div');
    $temp.innerHTML = `<div class="history">
                        ${this.renderPlayers()}
                      </div>`;
    this.el = $temp.querySelector('.history');
    this.html = this.el.parentNode.innerHTML;
    return this;
  }

  History.prototype.renderPlayers = function() {
    return this.players.map(player => {
      return `${player.render().html}`
    }).join('');
  }

  History.prototype.empty = function() {
    this.el.parentNode.removeChild(this.el);
  }

  exports.History = History;

})(window, document)