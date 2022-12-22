const register_c = document.querySelector("#registration_selection_country");

register_c.addEventListener('change', (event) => {
  if (register_c.value === "Sweden") {
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
  else if (register_c.value === "Denmark") {
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
  else if (register_c.value === "Italy") {
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
  else if (register_c.value === "Norway") {
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
  else if (register_c.value === "Germany") {
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
  else if (register_c.value === "Japan") {
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
  else if (register_c.value === "Netherlands") {
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
  else if (register_c.value === "Finland") {
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
  else if (register_c.value === "Catalonia") {
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
  else if (register_c.value === "Turkey") {
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
  else if (register_c.value === "Sum of all") {
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