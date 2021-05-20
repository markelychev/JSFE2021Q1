import buttonView from "./button.v";

export default class Button {
  private readonly view = new buttonView();
  constructor(text: string) {
    this.view.insertText(text);
  }

  addHandlers = (event: string, handler: () => void) => {
    this.view.element.addEventListener(event, handler);
  }

  removeHandlers = (event: string, handler: () => void) => {
    this.view.element.removeEventListener(event, handler);
  }

  render = (parentNode: HTMLElement) => {
    this.view.render(parentNode);
  }
}