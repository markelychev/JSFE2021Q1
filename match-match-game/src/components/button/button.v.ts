import './button.scss'
import ElementCreator from "../elementCreator/elementCreator";

export default class ButtonView extends ElementCreator {
  constructor() {
    super('button', ['btn'])
  }

  insertText = (text: string = 'button') => {
    this.element.innerText = text;
  }

  render = (parentNode: HTMLElement) => {
    parentNode.append(this.element)
  }
}