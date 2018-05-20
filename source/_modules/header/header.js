'use strict';

export default class Header {
  constructor(){
    this.init();
    console.log('Header module has been loaded.');
  }

  _Trigger(trigger, container){
    let button = document.getElementById(trigger);
    let target = document.getElementById(container);

    button.addEventListener('click', ()=> {
      target.style.display = 'block';
      button.style.display = 'none';
    });
  }

  init(){
    let menuTrigger = new this._Trigger('menu-trigger', 'mobileMenu');
    let menuCloser = new this._Trigger('mobileMenu', 'menu-trigger');
  }
}