var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Comentario
typewriter.typeString('Diseñadora UX UI - FrontEnd Jr')
    .pauseFor(2500)
    .deleteAll(5)
    .typeString('Si lo puedes imaginar, lo puedes diseñar')
    .pauseFor(2500)
    //Numero de caracteres que se borraran
    .deleteChars(7)
    .typeString('<strong>programar</strong>')
    .pauseFor(2500)
    .start();