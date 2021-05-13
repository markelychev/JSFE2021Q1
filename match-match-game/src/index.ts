import App from './components/app/app'
import GameField from './components/gameField/gameField'
import './styles.scss'

const game = document.querySelector('.game') ?? document.body;
const gameField = new GameField();
game.append(gameField.element)