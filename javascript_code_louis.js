const register = document.querySelector("#registration_selection_country");
const optionA = document.querySelector("#show_option_A");
const optionB = document.querySelector("#show_option_B");

register.addEventListener('change', (event) => {
  if (register.value === "Sweden") {
    show_Sweden.style.display = "block";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Denmark") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "block";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Italy") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "block";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Norway") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "block";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Germany") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "block";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Japan") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "block";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Netherlands") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "block";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Finland") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "block";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Catalonia") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "block";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Turkey") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "block";
    show_Sum_of_all.style.display = "none";
      }
  else if (register.value === "Sum of all") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "none";
    show_Italy.style.display = "none";
    show_Norway.style.display = "none";
    show_Germany.style.display = "none";
    show_Japan.style.display = "none";
    show_Netherlands.style.display = "none";
    show_Finland.style.display = "none";
    show_Catalonia.style.display = "none";
    show_Turkey.style.display = "none";
    show_Sum_of_all.style.display = "block";
      }
});