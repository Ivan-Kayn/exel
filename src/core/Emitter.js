export class Emitter {
  constructor() {
    this.listeners = {};
  }


  emit(event, ...args) { // this method will note listeners: event is the event in 'formula:done' mode, and other args
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }

  subscribe(event, fn) { // method for subscribing on notifications, on adding new listener: event is string, second arg is callback
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn);
    };
  }
}
