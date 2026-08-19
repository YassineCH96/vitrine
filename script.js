const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-kind]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const tags = card.dataset.kind.split(" ");
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
