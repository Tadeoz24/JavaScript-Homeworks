const highlineDiv = document.getElementById("textBox");
const boldedWords = document.querySelectorAll("strong");
highlineDiv.addEventListener("mouseenter", function () {
  boldedWords.forEach((value) => {
    value.style.color = "green";
    value.style.fontSize = "20px";
  });
});

highlineDiv.addEventListener("mouseleave", function () {
  boldedWords.forEach((value) => {
    value.style.color = "black";
    value.style.fontSize = "";
  });
});
