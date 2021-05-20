export default class ElementCreator {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classNames: Array<string> = []) {
    this.element = this.createElement(tag, classNames);
  }

  createElement = (tag: keyof HTMLElementTagNameMap = 'div', classNames: Array<string> = []): HTMLElement => {
    const el = document.createElement(tag);
    el.classList.add(...classNames);
    return el;
  };
}
