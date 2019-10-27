import {GridCell} from './gridCell';
import { GridRow } from './gridRow';
import { GridColumn } from './gridColumn';

export interface IGridHeader {
  id?: string,
  key: string;
  label: string,
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
    
    // Example on getting column cells
    // const secondColumn = new GridColumn();
    // console.log(secondColumn.getColumnCells('2'));
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
    row.addClass('grid-table-header');

    for (let i = 0, len = this.tableHeaders.length; i < len; i++) {
      let cell = this.createTableCell(this.tableHeaders[i].label);
      cell.addAttribute('data-column-id', i.toString());
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
        cell.addAttribute('data-column-id', j.toString());
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
