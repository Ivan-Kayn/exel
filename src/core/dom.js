class Dom {

}

export function $() {
  return new Dom();
}

$.create = (tagName, classes = '') => { // function used to create html element with classes, $ symbol of jQuerry
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
