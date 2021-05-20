import './timer.scss';
import ElementCreator from '../elementCreator/elementCreator';
import formatTime from '../../helpers/formatTime';
import formatedTime from '../../models/formatedTime-model';

export default class Timer extends ElementCreator {
  private time: number;

  private sec: HTMLElement;

  private min: HTMLElement;

  private intervalId?: NodeJS.Timeout;

  constructor() {
    super('div', ['game__timer']);
    this.time = 0;

    this.sec = document.createElement('span');
    this.min = document.createElement('span');

    this.addValue(formatTime(this.time));

    this.element.innerText = ':';
    this.element.prepend(this.min);
    this.element.append(this.sec);
  }

  run = () => {
    this.intervalId = setInterval(() => {
      this.time++;
      this.addValue(formatTime(this.time));
    }, 1000);
  };

  private addValue = (time: formatedTime) => {
    this.sec.innerText = time.sec;
    this.min.innerText = time.min;
  };

  stop = () => {
    if (this.intervalId) { clearInterval(this.intervalId); }
  };
}
