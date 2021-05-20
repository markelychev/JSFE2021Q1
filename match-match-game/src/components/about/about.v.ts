import './about.scss'
import ElementCreator from "../elementCreator/elementCreator";

const content = [
  'Register new player in game',
  'Configure your game settings',
  'Start you new game! Remember card positions and match it before times up.']

export default class AboutView extends ElementCreator {
  private readonly title: HTMLElement = this.createElement('h2', ['about__title'])
  constructor() {
    super('div', ['about']);
    this.createView();
  }

  private createAboutCard = (text: string) => {
    const card = this.createElement('div', ['about__card'])
    card.innerText = text;
    return card;
  }

  private createContentWrapper = () => {
    return this.createElement('div', ['about__content']);
  }

  private createAboutCards = () => {
    return content.map(text => {
      return this.createAboutCard(text);
    })
  }

  private addCards = () => {
    const wrapper = this.createContentWrapper();
    this.createAboutCards().forEach(card => {
      wrapper.append(card);
    })
    return wrapper
  }

  private createView = () => {
    this.title.innerText = 'How to play?';
    this.element.append(this.title);
    this.element.append(this.addCards());
  }

  render = (parentNode: HTMLElement) => {
    parentNode.append(this.element)
  }
}