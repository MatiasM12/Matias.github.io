document.addEventListener('DOMContentLoaded', function () {
  startTyping();
});

const inputElement = document.getElementById('typedText');
const outputLine1 = document.getElementById('outputLine1');
const outputLine2 = document.getElementById('outputLine2');
const outputLine3 = document.getElementById('outputLine3');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const textToType1 = '$ Hola soy Matias Morales';
const textToType2 = '$ Desarrollador Java';
const textToType3 = '';
let index1 = 0;
let index2 = 0;
let index3 = 0;
let writingStarted = false;

function typeText(targetElement, textToType, index) {
  targetElement.textContent = textToType.slice(0, index);
  if (index < textToType.length) {
    setTimeout(() => typeText(targetElement, textToType, index + 1), 100);
  }
}

function startTyping() {
  if (!writingStarted) {
    writingStarted = true;
    var anchoPantalla = window.innerWidth;

    typeText(outputLine1, textToType1, index1);
    setTimeout(() => {
      input1.style.display = 'none';
      outputLine1.style.fontWeight = 'bold';
      if (anchoPantalla < 700)
        outputLine1.style.fontSize = '5vw';
      else
        outputLine1.style.fontSize = '1.8vw';
      input2.style.display = 'block';
      typeText(outputLine2, textToType2, index2);
    }, textToType1.length * 150);
    setTimeout(() => {
      input2.style.display = 'none';
      outputLine2.style.fontWeight = 'bold';
      if (anchoPantalla < 700)
        outputLine2.style.fontSize = '5vw';
      else
        outputLine2.style.fontSize = '1.8vw';
      input3.style.display = 'block';
      typeText(outputLine3, textToType3, index2);
    }, (textToType1.length + textToType2.length) * 130);


  }
}

inputElement.addEventListener('focus', startTyping);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function redirigir(pagina) {
  window.open(pagina, '_blank');
}
