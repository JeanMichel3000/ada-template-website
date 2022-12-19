const register = document.querySelector("#registration_selection");
const optionA = document.querySelector("#show_option_A");
const optionB = document.querySelector("#show_option_B");

register.addEventListener('change', (event) => {
  if (register.value === "option1") {
      optionA.style.display = "block";
      optionB.style.display = "none";
      }
  else if (register.value === "option2") {
          optionA.style.display = "none";
          optionB.style.display = "block";
          }
  else {
      optionA.style.display = "none";
      optionB.style.display = "none";
      }
});