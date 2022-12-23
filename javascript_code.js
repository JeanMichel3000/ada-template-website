const register = document.querySelector("#registration_selection");
const optionA = document.querySelector("#show_option_A");
const optionB = document.querySelector("#show_option_B");

register.addEventListener('change', (event) => {
  if (register.value === "option1") {
    show_option1.style.display = "block";
    show_option2.style.display = "none";
    show_option3.style.display = "none";
    show_option4.style.display = "none";
    show_option5.style.display = "none";
      }
  else if (register.value === "option2") {
    show_option1.style.display = "none";
    show_option2.style.display = "block";
    show_option3.style.display = "none";
    show_option4.style.display = "none";
    show_option5.style.display = "none";
          }
else if (register.value === "option3") {
    show_option1.style.display = "none";
    show_option2.style.display = "none";
    show_option3.style.display = "block";
    show_option4.style.display = "none";
    show_option5.style.display = "none";
            }
else if (register.value === "option4") {
    show_option1.style.display = "none";
    show_option2.style.display = "none";
    show_option3.style.display = "none";
    show_option4.style.display = "block";
    show_option5.style.display = "none";
                }
else if (register.value === "option5") {
    show_option1.style.display = "none";
    show_option2.style.display = "none";
    show_option3.style.display = "none";
    show_option4.style.display = "none";
    show_option5.style.display = "block";
                                }
  else {
    show_option1.style.display = "none";
    show_option2.style.display = "none";
    show_option3.style.display = "none";
    show_option4.style.display = "none";
    show_option5.style.display = "none"; }
});


const register_map = document.querySelector("#map_selection");

register_map.addEventListener('change', (event) => {
    if (register_map.value === "select_region") {
      map_europe.style.display = "none";
      map_east_asia.style.display = "none";
        }
    else if (register_map.value === "map1") {
        map_europe.style.display = "block";
        map_east_asia.style.display = "none";
            }
    else if (register_map.value === "map2") {
        map_europe.style.display = "none";
        map_east_asia.style.display = "block";
            }
});  

function function_button_plot(element) {
    if (plot_with_linear_regression.style.display == "none") {
        plot_without_linear_regression.style.display = "none";
        plot_with_linear_regression.style.display = "block" ;
      }
      else {
        plot_without_linear_regression.style.display = "block";
        plot_with_linear_regression.style.display = "none" ;

      }
  }