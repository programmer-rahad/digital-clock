'use strict';
import { customSelector as $, Clock } from "./utils.js";



function DigitalClock() {
 var clock = new Clock();
 this.ampmDOM = $('.ampm span');
 this.hoursDOM = $('.hours span:first-child');
 this.minutesDOM = $('.minutes span:first-child');
 this.secondsDOM = $('.seconds span:first-child');

 this.ampmDOM.textContent = clock.ampm;
 this.hoursDOM.textContent = clock.hours;
 this.minutesDOM.textContent = clock.minutes;
 this.secondsDOM.textContent = clock.seconds;
}

function App() {
 // Setup Clock
 new DigitalClock();
 setInterval(function () {
  new DigitalClock();
 }, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
 new App();
})



// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);