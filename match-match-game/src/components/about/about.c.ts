import AboutView from "./about.v";

export default class About {
  private readonly view = new AboutView();

  render = (parentNode: HTMLElement) => {
    this.view.render(parentNode);
  }
}