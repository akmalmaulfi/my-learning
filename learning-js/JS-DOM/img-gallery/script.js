const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function (e) {
        const att = e.target.getAttribute("src");
        jumbo.setAttribute("src", att);
        jumbo.classList.add("fade");
        setTimeout(function () {
          jumbo.classList.remove("fade");
        }, 500);
        e.preventDefault();
      });
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
