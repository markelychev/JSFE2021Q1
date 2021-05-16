import App from './components/app/app';
//import Game from './components/game/game';
import './styles.scss';

const imgs = ['img/eagle.jpg', 'img/elephant.jpg', 'img/lion.jpg', 'img/tiger.jpg', 'img/wolf.jpg'];

// const gameNode = document.querySelector('.game') ?? document.body;

// const game = new Game(imgs, 2).start();

new App(document.querySelector('#root')).render();

//gameNode.appendChild(game.element);
