
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const TIME_KEY = 'videoplayer-current-time';

const onTimeUpDate = data => {
    const time = data.seconds;
    localStorage.setItem(TIME_KEY, time);
  };

player.on(
  'timeupdate',
  throttle(onTimeUpDate, 1000)
);

const stopTime = localStorage.getItem(TIME_KEY);

player
  .setCurrentTime(stopTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

