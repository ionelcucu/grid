import { GridCell } from './gridCell';
import { GridRow } from './gridRow';
import { GridPaginator } from './gridPaginator';
import { GridColumn } from './gridColumn';

export interface IGridHeader {
  id?: string,
  key: string;
  label: string,

  [key: string]: any
}

export interface IGridOptions {
  data: any,
  headers: IGridHeader[],
  pagination?: boolean,
  itemsPerPage?: number,
  itemsPerPageList?: number[],
}

export class Grid {

  gridOptions: IGridOptions = {
    data: [],
    headers: [],
    pagination: false,
    itemsPerPage: 10,
    itemsPerPageList: [10, 25, 50]
  };

  tableHeaders: IGridHeader[];
  tableBody: string = '';
  paginator: GridPaginator;
  container: HTMLElement;
  columns: GridColumn[] = [];

  constructor(
    container: HTMLElement,
    options: IGridOptions
  ) {
    this.gridOptions = {...this.gridOptions, ...options};
    this.tableHeaders = options.headers;
    this.container = container;
    this.container.appendChild(this.createTableStructure());

    // Example on getting column cells
    // const secondColumn = new GridColumn(this.container);
    // console.log(secondColumn.getColumnCells('2'));
  }

  createTableStructure() {
    const tableWrapper = document.createElement('div');
    const columnWidths = this.computeColumnWidth();
    const tableHeaders = this.createTableHeaders(columnWidths);
    const tableBody = this.createTableBody(columnWidths);
    tableWrapper.className = 'grid-table';
    tableWrapper.appendChild(tableHeaders);
    tableWrapper.appendChild(tableBody);


    if (this.gridOptions.pagination) {
      const pagination = new GridPaginator(
        this.gridOptions.data.length,
        this.gridOptions.itemsPerPage,
        this.gridOptions.itemsPerPageList
      );
      tableWrapper.appendChild(pagination.createPaginator());
    }
    return tableWrapper;
  }

  createTableHeaders(columnWidths: any) {
    const tableHead = document.createElement('div');
    tableHead.className = 'grid-head';
    tableHead.style.height = '30px';
    const row = new GridRow();

    tableHead.appendChild(row.element);

    for (let i = 0, len = this.tableHeaders.length; i < len; i++) {

      let column = new GridColumn(this.container, this.tableHeaders[i].key, columnWidths[this.tableHeaders[i].key]);
      this.columns.push(column);

      let cell = this.createTableCell(this.tableHeaders[i].label, column.width);
      cell.addAttribute('data-column-id', i.toString());
      row.addCell(cell);
    }

    return tableHead;
  }

  createTableBody(columnWidths: any) {
    const tableBody = document.createElement('div');
    tableBody.className = 'grid-body';
    let itemsNumber = this.gridOptions.data.length;
    if (this.gridOptions.pagination) {
      itemsNumber = this.gridOptions.data.length < this.gridOptions.itemsPerPage ?
        this.gridOptions.data.length :
        this.gridOptions.itemsPerPage;
    }
    for (let i = 0, len = itemsNumber; i < len; i++) {
      let row = new GridRow();
      row.setRowPosition(i);
      for (let j = 0, length = this.tableHeaders.length; j < length; j++) {
        let cell = this.createTableCell(this.gridOptions.data[i][this.tableHeaders[j].key], columnWidths[this.tableHeaders[j].key]);
        cell.addAttribute('data-column-id', j.toString());
        row.addCell(cell);
      }
      tableBody.appendChild(row.element);
    }
    return tableBody;
  }

  createTableCell(content: string, width: number) {
    const cell = new GridCell(content);
    cell.element.style.width = width + '%';
    return cell;
  }

  computeColumnWidth() {

    //TODO: Change this to a proper version
    let contentAverage = this.gridOptions.headers.reduce((columns, currentValue) => {
      columns[currentValue.key] = 0;
      return columns;
    }, {} as IGridHeader);

    let totalWidth = 0;

    for (let i = 0, len = this.gridOptions.data.length; i < len; i++) {
      for (let columnKey in contentAverage) {
        if (contentAverage.hasOwnProperty(columnKey)) {
          contentAverage[columnKey] += this.gridOptions.data[i][columnKey].toString().length;
        }
      }
    }

    for (let columnKey in contentAverage) {
      if (contentAverage.hasOwnProperty(columnKey)) {
        contentAverage[columnKey] = Math.ceil(contentAverage[columnKey] / this.gridOptions.data.length);
        totalWidth += contentAverage[columnKey];
      }
    }

    let percent = 100 / totalWidth;

    for(let key in contentAverage) {
      contentAverage[key] *= percent;
    }

    return contentAverage;
    //set column widths
  }
}
