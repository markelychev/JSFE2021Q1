import Header from "../header/header"
import observer from "../observer/observer";

import Router from '../router/easyRouter';

export default class App {
  private readonly header: Header = new Header()
  constructor(private readonly rootNode: HTMLBaseElement | null) {
    this.addRouter()
  }

  addRouter = () => {
    const router = new Router();

    router
      .addRoute('About_game', () => {
        alert('welcome in about page');
        observer.notify('router', 'About_game')
      })
      .addRoute('Game_score', () => {
        alert('welcome in Game_score');
        observer.notify('router', 'Game_score')
      })
      .addRoute('Settings', () => {
        alert('welcome in about page');
        observer.notify('router', 'Settings')
      })
      .addRoute('', () => {
        // general controller
        console.log('welcome in catch all controller');
      });

  }

  render = () => {
    if (this.rootNode) {
      this.rootNode.prepend(this.header.element)
    }
  }

}
