import {$} from '@core/dom';

export class Excel {
  constructor(selector, oprions) {
    this.$el = document.querySelector(selector); // $ is used for dom elements, el is dom element for inserting excel
    this.components = oprions.components || []; // all excel components rendering ([] if no components)
  }

  getRoot() {
    const $root = $.create('div', 'excel'); // creating div with excel className

    this.components.forEach(Component => { // rendering all excel components
      const $el = $.create('div', Component.className); // creating divs for components
      const component = new Component($el); // creating new instance of every excel component, with $el for future events
      $el.innerHTML = component.toHTML(); // toHTML is component proto method from ExcelComponent, used to render template
      $root.append($el); // appending component template to excel div
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot()); // appending getRoot excel template to index.html root element
  }
}
