// IntersectionObserver, can be used for infinite scroll
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector("ul");
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

//infinite scrolling code

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {});

const loadNewCards = function () {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Newly Added Card";
    li.classList.add("card");
    observer.observe(li);
    cardContainer.appendChild(li);
  }
};

lastCardObserver.observe(document.querySelector(".card:last-child"));
