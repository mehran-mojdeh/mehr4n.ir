const wellcomeMsg = "Hello, World!\n My name is \"Mehran\" and I'm a web developer."
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const about = document.getElementById('about');

function typeOut(target, text, timeGap, next) {
  let message = ''
  let delay = 0
  for( charIndx in text) {
    message += text[charIndx];   
    delay += timeGap*(1+Math.random())
    setTimeout((msg) => {
      target.innerText = msg;
    }, delay, message)
  }
  if(next) setTimeout(next, delay);
}

function showNav() {
  nav.style.opacity = 1;
}

setTimeout(
  typeOut, 1500, 
  document.getElementById('wellcoming'),
  wellcomeMsg,
  95,
  showNav
  )

  function showAboutMe() {
    main.style.height = 'fit-content';
    main.style.paddingBottom = '60px';
    about.style.display = 'block';   
    setTimeout(() => {
        window.scrollBy({ 
        top: 150,
      });
    }, 100);
  }