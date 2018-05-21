(function(exports, doc) {
  'use strict'
  function History(options) {
    this.historyDepth = options.historyDepth;
    this.maxDepth = options.depth;
  }

  History.prototype.render = function() {
    let $temp = document.createElement('div');
    let temps = [];
    for(var i = this.maxDepth; 0 < i; i--) {
      temps.
    }
    $temp.innerHTML = `<div class="history">
                        ${this.renderPlayers()}
                      </div>`;
    this.el = $temp.querySelector('.history');
    this.html = this.el.parentNode.innerHTML;
    return this;
  }

  History.prototype.renderPlayers = function() {



    let players = this.historyDepth[this.depth].filter(player => player.depth === this.depth || player.depth === this.depth + 1);
    return players.map(player => {
      return `${player.render().html}`
    }).join('');
  }

  exports.History = History;

})(window, document)