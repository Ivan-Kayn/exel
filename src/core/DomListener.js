import {capitalize} from '@core/utils';

export class DomListener { // future class for event listening. Proto for all components
  constructor($root, listeners = []) { // $root is every div containing render from component
    if (!$root) {
      throw new Error('no $root provided for DomListener'); // error for no components been declared in excel.
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`method ${method} is not implemented in ${this.name} component`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]); // I can use this in arrow function, on() is addEventListener() analog
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener=> {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}


function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
