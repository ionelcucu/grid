export class GridPaginator {
    
    totalRows: number;
    itemsPerPage: number;
    itemsPerPageList: number[];
    paginator: HTMLElement;
    currentPage: number = 1;

    constructor(totalRows: number, itemsPerPage: number, itemsPerPageList: number[]) {
        this.totalRows = totalRows;
        this.itemsPerPage = itemsPerPage;
        this.itemsPerPageList = itemsPerPageList;
    }

    createPaginator() {
        this.paginator = document.createElement('div');
        this.paginator.className = 'grid-paginator';
        const selector = document.createElement('select');
        selector.className = 'grid-items-per-page';
        selector.addEventListener('change', this.changeItemsPerPage);
        for(let i = 0; i < this.itemsPerPageList.length; i++) {
            const option = document.createElement('option');
            option.value = this.itemsPerPageList[i].toString();
            option.innerHTML = this.itemsPerPageList[i].toString();
            selector.appendChild(option);
        }
        this.paginator.appendChild(selector);
        
        const currentPageItems = document.createElement('div');
        currentPageItems.innerHTML = `${(this.currentPage - 1) * this.itemsPerPage + 1} to ${this.currentPage * this.itemsPerPage} of ${this.totalRows}`;
        this.paginator.appendChild(currentPageItems);

        const currentPageInfo = document.createElement('div');
        currentPageInfo.innerHTML = `Page ${this.currentPage} of ${Math.ceil(this.totalRows / this.itemsPerPage)}`;
        this.paginator.appendChild(currentPageInfo);
        return this.paginator;
    }

    changePage(pageNumber: number) {
        
    }

    changeItemsPerPage() {

    }
}
