import ElementCreator from '../elementCreator/elementCreator';
import './gameField.scss'

export default class GameField extends ElementCreator {
  constructor() {
    super('div', ['game__field'])
    this.element.innerHTML = `<div class="card-container">
          <div class="card">
            <div class="card__front">front</div>
            <div class="card__back">back</div>
          </div>
        </div>`
  }
}