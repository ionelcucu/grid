import {GridCell} from './gridCell';
import { GridRow } from './gridRow';

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
    const row = new GridRow();
    row.element.className = 'grid-row grid-table-header';
    const cells = [];

    for (let i = 0, len = this.tableHeaders.length; i < len; i++) {
      let cell = this.createTableCell(this.tableHeaders[i].label);
      cells.push(cell);
      row.addCell(cell);
    }

    return row.element;
  }

  createTableBody() {
    const tableBody = document.createElement('div');
    tableBody.className = 'grid-body';
    for (let i = 0, len = this.gridOptions.data.length; i < len; i++) {
      let row = new GridRow();
      for (let j = 0, length = this.tableHeaders.length; j < length; j++) {
        let cell = this.createTableCell(this.gridOptions.data[i][this.tableHeaders[j].key]);
        row.addCell(cell);
      }
      tableBody.appendChild(row.element);
    }
    return tableBody;
  }

  createTableRow() {
    const rowElement = document.createElement('div');
    rowElement.className = 'grid-row';
    return rowElement;
  }

  createTableCell(content: string) {
    const cell = new GridCell(content);
    cell.element.style.minWidth = 100 / this.tableHeaders.length + '%';
    return cell;
  }
}
