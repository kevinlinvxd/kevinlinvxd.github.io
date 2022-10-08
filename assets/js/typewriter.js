// From https://github.com/tameemsafi/typewriterjs

var descriptions = document.getElementById("descriptions");

var typewriter = new Typewriter(descriptions, {
  loop: false,
  delay: "natural",
  autoStart: true,
});

typewriter
  .typeString("Software Engineer")
  .pauseFor(1000)
  .deleteChars(8)
  .pauseFor(500)
  .typeString("Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Computer Engineering @ Iowa State")
  .pauseFor(300)
  .callFunction(function (state) {
    state.elements.cursor.style.display = "none";
  })
  .start();
