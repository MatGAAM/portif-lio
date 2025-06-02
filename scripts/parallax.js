window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const speed = 0.3; // quanto menor, mais lento o fundo
  const yPos = scrolled * speed;

  document.body.style.setProperty("--parallax-offset", `${yPos}px`);
});
