const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelector(".close-button");

toggleModal = () => {
  modal.classList.toggle("show__modal");
};

windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};
trigger.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});
// Close the widget with the esc key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show__modal")) {
    toggleModal();
  }
});
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

