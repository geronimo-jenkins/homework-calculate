document.querySelectorAll(' buttons .num')
  .forEach( el => el.addEventListener('click', onClick));
document.getElementsByClassName("solve")[0]
  .addEvenListener("click", solvePressed);
  const $result = document.getElementById("result");

function onClick(ev) {
   const num = ev.target.innerText;
   $result.innerText += num;
}

function solvePressed(ev) {
  $result.innerText = eval ($result.innerText);
}