import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
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

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // only for changes that we subscribed
  storeChanged() {

  }


  isWatching(key) {
    return this.subscribe.includes(key);
  }

  init() { // init component, adding dom listeners
    this.initDOMListeners();
  }

  destroy() { // deleting component and listeners, also unsubscribing emit events and store
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
