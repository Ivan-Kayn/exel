import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'; // static to have access without class instance


  toHTML() {
    return `
    <input type="text" class="input" value="New Table"/>
        <div>

            <div class="button">
                <i class="material-icons">
                    exit_to_app
                </i>
            </div>
            <div class="button">
                <i class="material-icons">
                    delete
                </i>
            </div>

        </div>
    `;
  }
}
