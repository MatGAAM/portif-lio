document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    // console.log("observer", observer);
    (entries, observer) => {
      console.log("entries", entries);
      console.log("entries observer", observer);
      entries.forEach((entry) => {
        console.log("entry", entry);
        console.log("entry.isIntersecting", entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("slider-fade-in");
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("slider-fade-in");
        }
        console.log("entry.target.classList", entry.target.classList);
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
