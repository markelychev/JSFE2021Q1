import './timer.scss';
import ElementCreator from '../elementCreator/elementCreator';

export default class Timer extends ElementCreator {
  private time: number;
  private sec: HTMLElement;
  private min: HTMLElement;
  private intervalId?: NodeJS.Timeout

  constructor() {
    super('div', ['game__timer']);
    this.time = 0;

    this.sec = document.createElement('span');
    this.min = document.createElement('span');
    this.sec.innerText = '00'
    this.min.innerText = '00'
    this.element.innerText = ':'
    this.element.prepend(this.min);
    this.element.append(this.sec);

  }

  run = () => {
    this.intervalId = setInterval(() => {
      this.time++;
      this.sec.innerText = `${this.time}`;
    }, 1000)
  }

  stop = () => {
    if (this.intervalId) { clearInterval(this.intervalId); }
  }
}
