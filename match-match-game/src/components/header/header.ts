import ElementCreator from '../elementCreator/elementCreator'
import './header.scss'

export default class Header extends ElementCreator {
  constructor() {
    super('header', ['header'])
  }
}