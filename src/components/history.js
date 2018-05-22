(function(exports, doc) {
  'use strict'
  function History(options) {
    this.historyDepth = options.historyDepth;
    this.maxDepth = options.depth;
  }

  History.prototype.render = function() {
    let temp = document.createElement('div');
    let htmlList = [];
    for(var idx = this.maxDepth; 0 < idx; --idx) {
      htmlList.push(`<div class="history_depth">${this.renderPlayers(this.historyDepth[idx], idx)}</div>`);
    }
    temp.innerHTML = `<div class="history">
                        <h1 class="history_title">History</h1>
                        ${htmlList.join('')}
                      </div>`;
    this.el = temp.querySelector('.history');
    this.html = this.el.parentNode.innerHTML;
    return this;
  }

  History.prototype.renderPlayers = function(list, depth) {
    let players = list.filter(player => player.depth === depth || player.depth === depth + 1);
    return players.map(player => {
      if(player.depth === depth && player.depth !== this.maxDepth) {
        player.className = 'off' ;
      }
      return `${player.render().html}`
    }).join('');
  }

  exports.app = exports.app || {};
  exports.app.History = History;

})(window, document)