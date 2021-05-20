export default class LoginModel {
  private isLogined = false;

  changeState = () => {
    this.isLogined = !this.isLogined;
  }

  get state() {
    return this.isLogined;
  }
}