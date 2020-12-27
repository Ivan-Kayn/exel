import {$} from '@core/dom';
import {Emitter} from '@core/Emitter';
import {StoreSubscriber} from '@core/StoreSubscriber';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector); // $ is used for dom elements, el is dom element for inserting excel
    this.components = options.components || []; // all excel components rendering ([] if no components)
    this.store = options.store;
    this.emitter = new Emitter(); // object of observer oop pattern
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('div', 'excel'); // creating div with excel className
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components.map(Component => { // rendering all excel components
      const $el = $.create('div', Component.className); // creating divs for components
      // creating new instance of every excel component, with $el for future events
      const component = new Component($el, componentOptions);
      $el.html(component.toHTML()); // toHTML is component proto method from ExcelComponent, used to render template
      $root.append($el); // appending component template to excel div
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot()); // appending getRoot excel template to index.html root element

    this.subscriber.subscribeComponents(this.components);

    this.components.forEach(component => component.init());
  }

  destroy() {
    this.components.forEach(component => component.destroy);

    this.subscriber.unsubscribeFromStore();
  }
}
