document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    // console.log("observer", observer);
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slider-fade-in");
        } else {
          entry.target.classList.remove("slider-fade-in");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  const elements = document.querySelectorAll(".observe-title");
  elements.forEach((el) => observer.observe(el));

  console.log("IntersectionObserver ativo");
});
