export class DomListener { // future class for event listening. Proto for all components
  constructor($root) { // $root is every div containing render from component
    if (!$root) {
      throw new Error('no $root provided for DomListener'); // error for no components been declared in excel.
    }
    this.$root = $root;
  }
}
