import { GridCell } from './gridCell';

export class GridColumn {
  cells: GridCell[];
  container: HTMLElement;
  width: number;
  key: string;

  constructor(container: HTMLElement, key: string, width: number) {
    this.container = container;
    this.width = width;
    this.key = key;
  }

  getColumnCells(columnId: string) {
    return this.container.querySelectorAll(`[data-column-id="${columnId}"]`);
  }

  setColumnWidth(width: number) {
    this.width = width;
  }
}
