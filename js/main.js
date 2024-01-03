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

document.addEventListener('DOMContentLoaded', function () {
  const fileExplorer = document.querySelector('.file-explorer');
  const editor = document.querySelector('.editor');

  fileExplorer.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'LI') {
      const folderName = target.textContent.trim();
      const firstWord = folderName.split(/\s+/)[0];
      updateEditorContent(firstWord);
      console.log(firstWord)
    }
  });
  editor.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'DIV') {
      const folderName = target.textContent.trim();
      const firstWord = folderName.split(/\s+/)[0];
      updateEditorContent(firstWord);
      console.log(firstWord)
    }
  });

  function updateEditorContent(folderName) {
    const editorTitleBar = document.querySelector('.editor-title-bar');
    const codeContent = document.querySelector('.editor');

    switch (folderName) {
      case 'test/':
      case 'Main.java':
        codeContent.innerHTML = `<div class="editor-title-bar">Main.java</div>
    <div class="code-file" id="codeFile">
      <div class="line-numbering">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <!-- Add more line numbers as needed -->
      </div>
      <div class="code-content">
        <span class="line2">public class Main {</span>
        <span class="line2">    public static void Main(String[] args) {</span>
        <span class="line2">        System.out.println("Hello, World!");</span>
        <span class="line2">    }</span>
        <span class="line2">}</span>
        <!-- Add more lines of code as needed -->
      </div>`;
        break;
      case 'presentacion':
      case 'info-me.html':
        codeContent.innerHTML = `<div class="directories" ><div class="editor-title-bar" id="directori1" >info-me.html</div><div  class="editor-title-bar" id="directori2">info-educ.html</div><div  class="editor-title-bar" id="directori2">info-car.html</div><div  class="editor-title-bar" id="directori2">info-skll.html</div></div>
        <div class="code-file" id="codeFile">
          <div class="line-numbering">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
          </div>
          <div class="code-content">
            <span class="line">¡Saludos! Soy Matías Morales, un estudiante apasionado de sistemas con muchas ganas de integrarme al mundo laboral mientras continúo con mis estudios. Mi compromiso,dedicación y habilidades técnicas son la combinación perfecta para contribuir de manera positiva y aprender cada día más.</span>
            <span class="line">Te invito a navergar por estos directorios para conocer un poco mas de mi.</span>
            <span class="line">¡Espero ser parte de tu equipo y crecer juntos!</span> </div>
          </div>
          </div>`;
        break;
      case 'educacion':
      case 'info-educ.html':
        codeContent.innerHTML = `<div class="directories" ><div class="editor-title-bar" id="directori1">info-educ.html</div><div  class="editor-title-bar" id="directori2" >info-me.html</div><div  class="editor-title-bar" id="directori2">info-car.html</div><div  class="editor-title-bar" id="directori2">info-skll.html</div></div>
    <div class="code-file" id="codeFile">
      <div class="line-numbering">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
      </div>
      <div class="code-content">
        <span class="line" id="subtitle">Educación académica: </span>
        <span class="line" >- Formacion primaria y secundaria completos (Antonio toro)</span>
        <span class="line" >- Formacion univeritaria (UNGS):</span>
        <span class="line">  <img  src="img/graduacion.png" alt=""> Graduado en Tecnicatura Universitaria en Informatica</span>
        <span class="line">  <img  src="img/cargando.png" alt=""> Cursando ultimo año de la Licenciatura en sistemas</span>
        <!-- Add more lines of code as needed -->
      </div>`;
        break;
      case 'tecnologias':
      case 'info-skll.html':
        codeContent.innerHTML = `<div class="directories" ><div class="editor-title-bar" id="directori1">info-skll.html</div><div class="editor-title-bar" id="directori2" >info-me.html</div><div  class="editor-title-bar" id="directori2">info-educ.html</div><div  class="editor-title-bar" id="directori2">info-car.html</div></div>
    <div class="code-file" id="codeFile">
      <div class="line-numbering">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
      </div>
      <div class="code-content">
          <span class="line" id="subtitle">Habilidades Técnicas:</span>
          <span class="line2">- Programación:</span>
          <span class="line2">
              <div class="tooltip" data-text="Java"><img src="img/java.png" alt=""></div>
              <div class="tooltip" data-text="Spring Boot"><img src="img/spring-boot.png" alt=""></div>
              <div class="tooltip" data-text="Node.js"><img src="img/node.png" alt=""></div>
          </span>
          <span class="line2">- Bases de Datos:</span>
          <span class="line2">
              <div class="tooltip" data-text="MySQL"><img src="img/mysql.png" alt=""></div>
              <div class="tooltip" data-text="PostgreSQL"><img src="img/postgre.png" alt=""></div>
              <div class="tooltip" data-text="MongoDB"><img src="img/mongo.png" alt=""></div>
          </span>
          <span class="line2">- Desarrollo Web: </span>
          <span class="line2">
              <div class="tooltip" data-text="HTML5"><img src="img/html-5.png" alt=""></div>
              <div class="tooltip" data-text="CSS3"><img src="img/css-3.png" alt=""></div>
              <div class="tooltip" data-text="JavaScript"><img src="img/js.png" alt=""></div>
          </span>
          <span class="line2">- Otras Herramientas: </span>
          <span class="line2">
              <div class="tooltip" data-text="Git"><img src="img/git.png" alt=""></div>
              <div class="tooltip" data-text="Postman"><img src="img/postman.png" alt=""></div>
              <div class="tooltip" data-text="Jira"><img src="img/jira.png" alt=""></div>
              <div class="tooltip" data-text="Trello"><img src="img/trello.png" alt=""></div>
              <div class="tooltip" data-text="Linux"><img src="img/linux.png" alt=""></div>
          </span>
       </div>
      `;
        break;
      case 'caracteristicas':
      case 'info-car.html':
        codeContent.innerHTML = `<div class="directories" ><div class="editor-title-bar" id="directori1">info-car.html</div><div  class="editor-title-bar" id="directori2" >info-me.html</div><div  class="editor-title-bar" id="directori2">info-educ.html</div><div  class="editor-title-bar" id="directori2">info-skll.html</div></div>
        <div class="code-file" id="codeFile">
          <div class="line-numbering">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
          </div>
          <div class="code-content">
            <span class="line2" id="subtitle">- Estudiante Apasionado:</span>
            <span class="line2">  Constantemente aprendiendo y mejorando habilidades técnicas.</span>
            <span class="line2" ></span>
            <span class="line2" id="subtitle">- Resolución de Problemas:</span>
            <span class="line2">  Capacidad para abordar desafíos de manera efectiva.</span>
            <span class="line2" ></span>
            <span class="line2" id="subtitle">- Adaptacion:</span>
            <span class="line2">  Flexibilidad para adaptarme a distintos eqipos y entornos.</span>
         </div>`;
        break;
      default:
        break;
    }
  }
});

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


