import Header from "../header/header"

export default class App {
  private readonly header: Header = new Header()
  constructor(private readonly rootNode: HTMLBaseElement | null) {
  }

  render = () => {
    if (this.rootNode) {
      this.rootNode.append(this.header.element)
    }
  }

}
