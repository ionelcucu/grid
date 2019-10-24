export interface IGridHeader {
  key: string;
  label: string
}

export interface IGridOptions {
  data: any,
  headers: IGridHeader[],
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
    container.appendChild(this.createTableStructure());
  }

  createTableStructure() {
    const tableWrapper = document.createElement('div');
    const tableHeaders = this.createTableHeaders();
    const tableBody = this.createTableBody();
    tableWrapper.className = 'grid-table';
    tableWrapper.appendChild(tableHeaders);
    tableWrapper.appendChild(tableBody);
    return tableWrapper;
  }

  createTableHeaders() {
    const row = this.createTableRow();
    row.className = 'grid-row grid-table-header';
    const cells = [];

    for (let i = 0, len = this.tableHeaders.length; i < len; i++) {
      let cell = this.createTableCell(this.tableHeaders[i].label);
      cells.push(cell);
      row.appendChild(cell);
    }

    return row;
  }

  createTableBody() {
    const tableBody = document.createElement('div');
    tableBody.className = 'grid-body';
    for (let i = 0, len = this.gridOptions.data.length; i < len; i++) {
      let row = this.createTableRow();
      for (let j = 0, length = this.tableHeaders.length; j < length; j++) {
        let cell = this.createTableCell(this.gridOptions.data[i][this.tableHeaders[j].key]);
        row.appendChild(cell);
      }
      tableBody.appendChild(row);
    }
    return tableBody;
  }

  createTableRow() {
    const rowElement = document.createElement('div');
    rowElement.className = 'grid-row';
    return rowElement;
  }

  createTableCell(content: string) {
    let cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.style.minWidth = 100 / this.tableHeaders.length + '%';
    cell.innerHTML = content;
    return cell;
  }
}
