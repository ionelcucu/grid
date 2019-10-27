import { GridCell } from "./gridCell";

export class GridRow {
    elementClass: string = 'grid-row';
    element: HTMLElement;
    cells: GridCell[];

    constructor() {
        this.element = document.createElement('div');
        this.element.className = this.elementClass;
        this.cells = [];
    }

    addCell(cell: GridCell) {
        this.cells.push(cell);
        this.element.appendChild(cell.element);
    }

    addClass(className: string) {
        this.element.classList.add(className);
    }
}
