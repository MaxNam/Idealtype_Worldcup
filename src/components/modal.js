(function(exports, doc) {
  'use strict'
  function Modal(options) {
    this.player = options.player;
    this.eventCallback = options.eventCallback;
  }

  Modal.prototype.render = function() {
    let temp = document.createElement('div');
    temp.innerHTML = `<div class="modal_wrap">
                        <div class="modal">
                          <div class="modal_head">
                            <h1>우승자</h1>
                          </div>
                          <div class="modal_body">
                            ${this.player.render().html}
                          </div>
                          <div class="modal_close"></div>
                        </div>
                        <div class="modal_overlay"></div>
                      </div>`;
    this.el = temp.querySelector('.modal_wrap');
    this.html = this.el.parentNode.innerHTML;
    this.bindEvents();
    return this;
  }

  Modal.prototype.empty = function() {
    this.el.parentNode.removeChild(this.el);
  }

  Modal.prototype.bindEvents = function() {
    this.el.querySelector('.modal_close').addEventListener('click', () => {
      this.empty();
      this.eventCallback();
    })
  }

  exports.app = exports.app || {};
  exports.app.Modal = Modal;

})(window, document)