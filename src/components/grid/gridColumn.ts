import { GridCell } from "./gridCell";

export class GridColumn {
    cells: GridCell[];
    container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    getColumnCells(columnId: string) {
        return this.container.querySelectorAll(`[data-column-id="${columnId}"]`);
    }
}
