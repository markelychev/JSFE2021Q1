import formatedTime from '../models/formatedTime-model';

export default function formatTime(time: number): formatedTime {
  const min = Math.floor(time / 60).toString();
  const sec = (time % 60).toString();
  const formatedMin = min.length > 1 ? min : `0${min}`;
  const formatedSec = sec.length > 1 ? sec : `0${sec}`;
  return { min: formatedMin, sec: formatedSec };
}
