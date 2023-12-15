let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #96B6C5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb929e;">Soy estudiante de mecatrónica y automatización. Apasionada por aprender y crear.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
