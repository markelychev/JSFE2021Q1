import LoginModel from "./login.m";
import LoginView from "./login.v";

export default class Login {
  private readonly view = new LoginView();
  private readonly model = new LoginModel();
  constructor() {
    this.view.btn.addHandlers('click', this.buttonHandler);
  }

  buttonHandler = () => {
    this.model.changeState();
    console.log("isLogined: " + this.model.state);
  }

  render = (parentNode: HTMLElement) => {
    this.view.render(parentNode);
  }
}