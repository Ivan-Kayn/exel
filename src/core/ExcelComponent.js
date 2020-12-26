import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.prepare();
    this.unsubscribers = [];
  }

  prepare() { // setting component before init

  }

  toHTML() { // method that return html template
    return '';
  }

  $emit(event, ...args) { // more easy interface for using emit function of emmit object
    const unsub = this.emitter.emit(event, ...args);
    this.unsubscribers.push(unsub);
  }

  $on(event, fn) { // subscribing on event event
    this.emitter.subscribe(event, fn);
  }

  init() { // init component, adding dom listeners
    this.initDOMListeners();
  }

  destroy() { // deleting component and listeners, also unsubscribing emit events
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
