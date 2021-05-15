export default class ElementCreator {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classNames: Array<string> = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classNames);
  }
}
