export class GridCell {
  elementClass: string = 'grid-cell';
  content: string = '';
  element: HTMLElement;

  constructor(content: string) {
      this.element = document.createElement('div');
      this.element.className = this.elementClass;
      this.element.innerHTML = content;
      this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
    this.element.innerHTML = content;
  }
}
