import ElementCreator from '../elementCreator/elementCreator'
import Nav from '../nav/nav';
import './header.scss';

const logoHTML = `<a href="" class="logo">
      <span class="logo__w logo__w-top">match</span>
      <span class="logo__w logo__w-bottom">match</span>
    </a>`

export default class Header extends ElementCreator {
  private readonly nav: Nav = new Nav()
  constructor() {
    super('header', ['header']);
    console.log(this.nav.element)
    this.element.innerHTML = `${logoHTML}
    <button class="btn">register new player</button>`
    this.element.append(this.nav.element)
  }
}