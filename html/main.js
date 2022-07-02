// IntersectionObserver, can be used for infinite scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      console.log(entry);
      entry.target.classList.toggle("show", entry.isIntersecting);
    },
    { threshold: 0.5, rootMargin: "-500px" }
  );
});

cards.forEach((card) => {
  observer.observe(card);
});
