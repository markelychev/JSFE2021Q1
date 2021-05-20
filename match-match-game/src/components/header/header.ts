import ElementCreator from '../elementCreator/elementCreator';
import Login from '../login/login.c';
import Nav from '../nav/nav';
import './header.scss';

const logoHTML = `<a href="" class="logo">
      <span class="logo__w logo__w-top">match</span>
      <span class="logo__w logo__w-bottom">match</span>
    </a>`;

export default class Header extends ElementCreator {
  private readonly nav: Nav = new Nav();
  private readonly login = new Login()

  constructor() {
    super('header', ['header']);
    console.log(this.nav.element);
    this.element.innerHTML = `${logoHTML}`;
    this.element.append(this.nav.element);
    this.element.append(this.nav.element);
    this.login.render(this.element);
  }
}
