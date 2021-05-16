import ElementCreator from '../elementCreator/elementCreator'
import './header.scss';

const logoHTML = `<a href="" class="logo">
      <span class="logo__w logo__w-top">match</span>
      <span class="logo__w logo__w-bottom">match</span>
    </a>`

export default class Header extends ElementCreator {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `${logoHTML}
    <nav class="nav header__nav">
      <ul class="nav__list">
        <li class="nav__item nav__item-active">
          <a href="" class="nav__link">About game</a>
        </li>
        <li class="nav__item"><a href="" class="nav__link">Game score</a></li>
        <li class="nav__item"><a href="" class="nav__link">Settings</a></li>
      </ul>
    </nav>
    <button class="btn">register new player</button>`
  }
}