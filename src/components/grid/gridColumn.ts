import { GridCell } from "./gridCell";

export class GridColumn {
    cells: GridCell[];

    constructor() {
    }

    getColumnCells(columnId: string) {
        return document.querySelectorAll(`[data-column-id="${columnId}"]`);
    }
}
