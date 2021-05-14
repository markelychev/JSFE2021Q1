import Card from './components/card/card';
import GameField from './components/gameField/gameField';
import './styles.scss';

const game = document.querySelector('.game') ?? document.body;
const gameField = new GameField();
const card = new Card('./img/eagle.jpg');

gameField.element.append(card.element);
game.append(gameField.element);
