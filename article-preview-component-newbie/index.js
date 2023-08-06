let share = document.querySelectorAll(".share");
share.forEach((el) => {
  el.addEventListener("click", () => {
    let x = document.querySelector(".pop-up");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
});
