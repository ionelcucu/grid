import { GridCell } from "./gridCell";

export class GridRow {
    elementClass: string = 'grid-row';
    element: HTMLElement;
    cells: GridCell[];
    defaultRowHeight: number = 30;
    defaultRowWidth: number = 100;
    rowHeight: number;
    rowWidth: number;

    constructor() {
        this.element = document.createElement('div');
        this.element.className = this.elementClass;
        this.cells = [];
        this.setRowHeight(this.defaultRowHeight);
        this.setRowWidth(this.defaultRowWidth);
    }

    addCell(cell: GridCell) {
        this.cells.push(cell);
        this.element.appendChild(cell.element);
    }

    addClass(className: string) {
        this.element.classList.add(className);
    }

    setRowHeight(height: number) {
        this.rowHeight = height;
        this.element.style.height = height + 'px';
    }

    setRowWidth(width: number) {
        this.rowWidth = width;
        this.element.style.width = width + '%';
    }

    setRowPosition(index: number) {
        this.element.style.top = (index * this.rowHeight) + 'px';
    }
}
