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

// Sending Email with SMPJS

submit.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    sendForm();
  });
});

function sendForm() {
  Email.send({
    SecureToken: "88e974a3-cc83-4dac-a4eb-6223f95c12be",
    To: "marketing@auladig.co",
    From: "alejo921017@gmail.com",
    Subject: "New contact appointment",
    Body: `Este es el cuerpo del mensaje`,
  }).then((message) => {
    if (message === "OK") {
      console.log("message:", message);
      console.log("entre a OK");
    } else {
      console.log("Error");
    }
  });
}