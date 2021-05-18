import ElementCreator from '../elementCreator/elementCreator';
import observer from '../observer/observer';
import './nav.scss';

interface linkNode extends HTMLElement {
  href?: string
}

const baseNavItem = ['About_game', 'Game_score', 'Settings'];

export default class Nav extends ElementCreator {
  private readonly list: HTMLElement
  constructor(private navItem: string[] = baseNavItem) {
    super('nav', ['nav', 'header__nav'])
    this.list = this.createList();
    this.element.append(this.list);
    observer.subscribe('router', this.addActive)
  }

  addActive = (data: string) => {
    console.log(data)
  }

  private createList = () => {

    const listNode = this.createElement('ul', ['nav__list']);
    const liNodes: HTMLElement[] = this.navItem.map((item) => {
      const aNode: linkNode = this.createElement('a', ['nav__link'])
      aNode.href = '/#/' + item;
      aNode.innerText = item;
      const li = this.createElement('li', ['nav__item']);
      li.append(aNode)
      return li;
    })
    liNodes.forEach((liNode) => listNode.append(liNode))

    return listNode
  }
}