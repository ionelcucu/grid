export interface IGridHeader {
  key: string;
  label: string
}

export interface IGridOptions {
  data: any,
  headers: IGridHeader[]
}

export class Grid {

  gridOptions: IGridOptions;

  tableHeaders: IGridHeader[];
  tableBody: string = '';

  constructor(
    container: HTMLElement,
    options: IGridOptions
  ) {
    this.gridOptions = options;
    this.tableHeaders = options.headers;
    container.appendChild(this.createTableHeaders());
  }

  createTableHeaders() {
    const row = this.createTableRow();
    const cells = [];

    for (let i = 0, len = this.tableHeaders.length; i < len; i++) {
      let cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.innerHTML = this.gridOptions.headers[i].label;
      cells.push(cell);
      row.appendChild(cell);
    }

    return row;
  }

  createTableBody() {
  }

  createTableRow() {
    const rowElement = document.createElement('div');
    rowElement.className = 'grid-row';
    return rowElement;
  }

  createTableCell() {
  }
}
