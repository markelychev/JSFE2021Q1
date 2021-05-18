import Game from "../game/game";
import Header from "../header/header"
import observer from "../observer/observer";

import Router from '../router/easyRouter';

const imgs = ['img/eagle.jpg', 'img/elephant.jpg', 'img/lion.jpg', 'img/tiger.jpg', 'img/wolf.jpg'];

export default class App {
  private readonly header: Header = new Header();
  private readonly mainNode = this.header.createElement('main', ['main']); //это вообще законно???
  constructor(private readonly rootNode: HTMLBaseElement | null) {
    this.addRouter()
  }

  addRouter = () => {
    const router = new Router();

    router
      .addRoute('About_game', () => {
        observer.notify('router', 'About_game');
        const test = this.header.createElement('p')
        test.innerText = 'About_game';
        this.renderMainContent(test)
      })
      .addRoute('Game_score', () => {
        observer.notify('router', 'Game_score')
        const test = this.header.createElement('p')
        test.innerText = 'Game_score';
        this.renderMainContent(test)
      })
      .addRoute('Settings', () => {
        observer.notify('router', 'Settings')
        const test = this.header.createElement('p')
        test.innerText = 'Settings';
        this.renderMainContent(test)
      })
      .addRoute('', () => {
        // general controller
        console.log('welcome in catch all controller');
      });

  }

  private renderMainContent = (content: HTMLElement) => {
    this.mainNode.innerHTML = '';
    this.mainNode.append(content);
  }

  render = () => {
    if (this.rootNode) {
      this.rootNode.prepend(this.mainNode);
      this.rootNode.prepend(this.header.element);
    }
  }

}
