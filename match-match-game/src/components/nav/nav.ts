import ElementCreator from '../elementCreator/elementCreator';
import observer from '../observer/observer';
import './nav.scss';

interface LinkNode extends HTMLElement {
  href?: string
}

const activeClass = 'nav__link-active';

const baseNavItem = ['About_game', 'Game_score', 'Settings'];

export default class Nav extends ElementCreator {
  private readonly list: HTMLElement;

  private readonly linkNode: Map<string, HTMLElement> = new Map();

  constructor(private navItem: string[] = baseNavItem) {
    super('nav', ['nav', 'header__nav']);
    this.list = this.createList();
    this.element.append(this.list);
    observer.subscribe('router', this.addActiveClass);
  }

  private addActiveClass = (data: string) => {
    const activeLinkNode = this.linkNode.get(data);
    if (activeLinkNode) {
      this.removeActiveClass();
      activeLinkNode.classList.add(activeClass);
    }
  };

  private removeActiveClass = () => {
    this.linkNode.forEach((node) => node.classList.remove(activeClass));
  };

  private createList = () => {
    const listNode = this.createElement('ul', ['nav__list']);
    const liNodes: HTMLElement[] = this.navItem.map((item) => {
      const aNode: LinkNode = this.createElement('a', ['nav__link']);
      aNode.href = `/#/${item}`;
      aNode.innerText = item;
      this.linkNode.set(item, aNode);
      const li = this.createElement('li', ['nav__item']);
      li.append(aNode);
      return li;
    });
    liNodes.forEach((liNode) => listNode.append(liNode));

    return listNode;
  };
}
