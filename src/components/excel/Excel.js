import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector); // $ is used for dom elements, el is dom element for inserting excel
    this.components = options.components || []; // all excel components rendering ([] if no components)
  }

  getRoot() {
    const $root = $.create('div', 'excel'); // creating div with excel className

    this.components = this.components.map(Component => { // rendering all excel components
      const $el = $.create('div', Component.className); // creating divs for components
      const component = new Component($el); // creating new instance of every excel component, with $el for future events
      // DEBUG
      if (component.name) {
        window['c' + component.name] = component;
      }
      $el.html(component.toHTML()); // toHTML is component proto method from ExcelComponent, used to render template
      $root.append($el); // appending component template to excel div
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot()); // appending getRoot excel template to index.html root element

    this.components.forEach(component => component.init());
  }
}
