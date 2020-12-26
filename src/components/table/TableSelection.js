export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) { // $el is instance of dom class
    this.clear();
    this.group = [];
    this.group.push($el);
    this.current = $el;
    $el.focus().addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach($cell => $cell.removeClass(TableSelection.className));
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach($el => $el.addClass(TableSelection.className));
  }
}
