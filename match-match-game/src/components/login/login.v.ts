import Button from "../button/button.c";
import ElementCreator from "../elementCreator/elementCreator";

export default class LoginView extends ElementCreator {
  readonly btn = new Button('register new player');
  constructor() {
    super('div', ['login', 'login__header']);
    this.addbutton();
  }

  addbutton = () => {
    this.btn.render(this.element);
  }

  render = (parentNode: HTMLElement) => {
    parentNode.append(this.element)
  }
}