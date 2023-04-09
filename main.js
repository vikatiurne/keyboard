function t11(event) {
  let input = event.key.toLowerCase();
  const obj = {
    control: 'ctrl',
    ' ': 'space',
  };
  if (obj[input] != undefined) input = obj[input];
  let arr = document.querySelectorAll('.keyboard');
  for (let item of arr) {
    item.classList.remove('active');
    if (item.getAttribute('data') === input) item.classList.add('active');
  }
}
document.querySelector('.i-11').onkeydown = t11;


