class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' // selector of Dom element or event.target
        ? document.querySelector(selector)
        : selector;
  }

  html(html) { // it can be a getter or setter method: if no param => getter, if param => setter
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this; // JS pattern, in this way we can use method clear.
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html(''); // it cleans html
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) { // node is html in javascript
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => { // function used to create html element with classes, $ symbol of jQuerry
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
