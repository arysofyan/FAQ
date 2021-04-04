const question = document.querySelectorAll(".question");
question.forEach(element => {
  element.addEventListener("click", e => {
    e.target.classList.toggle("bold");
    e.target.nextElementSibling.classList.toggle("rotate");
    e.target.nextElementSibling.nextElementSibling.classList.toggle("hide");
  });
});