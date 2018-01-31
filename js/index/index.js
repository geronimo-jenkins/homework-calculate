const btn = document.getElementById('btn');
const inpt = document.getElementById('inpt');
const result = document.getElementById('result');


document.querySelectorAll('nav.tabs button')
  .forEach( el => el.addEventListener('click', onClick));

  let value = 0;

function onClick() {
      if (button === 1) {
        value = 7;
      } if (button === 2) {
        value = 8;
      } if (button === 3) {
        value = 9;
      } if (button === 4) {
        value = "+";
      } if (button === 5) {
        value = 4;
      } if (button === 6) {
        value = 5;
      } if (button === 7) {
        value = 6;
      } if (button === 8) {
        value = "-";
      } if (button === 9) {
        value = 1;
      } if (button === 10) {
        value = 2;
      } if (button === 11) {
        value = 3;
      } if (button === 12) {
        value = "*";
      } if (button === 13) {
        value = " ";
      } if (button === 14) {
        value = 0;
      } if (button === 15) {
        value = eval(value);
      } if (button === 16) {
        value = "/";
      }
}