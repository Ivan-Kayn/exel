const CODES = {
  A: 65,
  Z: 90
};

function toCell(row) {
  return function(_, col) {
    return `
        <div 
        class="cell" 
        contenteditable 
        data-type="cell"
        data-id="${row}:${col}"
        data-col="${col}"
        ></div>
    `;
  };
}

function toColumn(col, index) {
  return `
      <div class="column" data-type="resizable" data-col="${index}" > 
         ${col}
         <div class="col-resize" data-resize="col"></div>
      </div>
    `;
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
        <div class="row" data-type="resizable">
            <div class="row-info"> 
                ${index ? index : ''} 
                ${resize}
            </div>
            <div class="row-data"> ${content} </div>
         </div>
    `;
}

function toChar(_, index) { // _placeholder used to say that we don't use this var
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('') // fills array with elements, in this case with ''
      .map(toChar)
      .map(toColumn)
      .join('');
  rows.push(createRow(null, cols));

  for (let row=0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('');
    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
