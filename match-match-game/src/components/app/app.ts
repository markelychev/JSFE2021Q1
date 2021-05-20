import About from '../about/about.c';
import Game from '../game/game';
import Header from '../header/header';
import observer from '../observer/observer';

import Router from '../router/easyRouter';

const imgs = ['img/eagle.jpg', 'img/elephant.jpg', 'img/lion.jpg', 'img/tiger.jpg', 'img/wolf.jpg'];

export default class App {
  private readonly header: Header = new Header();
  private readonly mainNode = this.header.createElement('main', ['main']); // это вообще законно???
  private readonly about = new About();

  constructor(private readonly rootNode: HTMLBaseElement | null) {
    this.addRouter();
  }

  private addRouter = () => {
    const router = new Router();

    router
      .addRoute('About_game', () => {
        observer.notify('router', 'About_game');
        this.clearMainContent();
        this.about.render(this.mainNode);
      })
      .addRoute('Game_score', () => {
        observer.notify('router', 'Game_score');
        const test = this.header.createElement('p');
        test.innerText = 'Game_score';
      })
      .addRoute('Settings', () => {
        observer.notify('router', 'Settings');
        const test = this.header.createElement('p');
        test.innerText = 'Settings';
      })
      .addRoute('', () => {
        // general controller
        console.log('welcome in catch all controller');
      });
  };

  private clearMainContent = () => {
    this.mainNode.innerHTML = '';
  };

  render = () => {
    if (this.rootNode) {
      this.rootNode.prepend(this.mainNode);
      this.rootNode.prepend(this.header.element);
    }
  };
}
