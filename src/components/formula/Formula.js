import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'; // static to have access without class instance

  toHTML() {
    return `
    <div class="info">
            fx
        </div>
        <div class="input" contenteditable="true" spellcheck="false">

        </div>
    `;
  }
}
