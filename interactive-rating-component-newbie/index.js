let rating = document.querySelectorAll(".btn");
let submit = document.getElementById("sub");
let homepage = document.querySelector(".homepage");
let response = document.querySelector(".thank-you");
let outcome = document.querySelector(".paragraph-1");

rating.forEach((el) => {
  el.addEventListener("click", () => {
    let output = el.textContent;
    rating.forEach((el) => {
      el.classList.remove("selected");
    });
    el.classList.add("selected");
    submit.addEventListener("click", () => {
      homepage.style.display = "none";
      response.style.display = "flex";
      outcome.textContent = `You selected ${output} out of 5`;
    });
  });
});
