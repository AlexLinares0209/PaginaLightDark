// Seleccionar elementos html
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");

let mode = "light";

// Seleccionar elementos html
let titulo = document.querySelector("h1");
let container = document.querySelector(".container");

    function modoLight() {
        button.className = "switch";
        container.className = "container";
        circle.className = "circle";
        titulo.textContent = "Modo light";
    }

    function modoDark() {
        button.className = "darkSwitch";
        container.className = "darkContainer";
        circle.className = "darkCircle";
        titulo.textContent = "Modo Dark";
    }

    circle.addEventListener("click", () => {
        if (mode == "light") {
            modoDark();
            mode = "dark";
        } else {
            modoLight();
            mode = "light";
        }
    })