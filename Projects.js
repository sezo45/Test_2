window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// __________________________________
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");
  window.onscroll = function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  };
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});