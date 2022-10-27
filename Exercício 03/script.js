let campoCelsius = document.querySelector(".campoCelsius");
let spanFah = document.querySelector("#temp-fahrenheit");
let spanKel = document.querySelector("#temp-kelvin");

function celsiusParaFahrenheit(valorCelsius) {
    return (valorCelsius * (9 / 5)) + 32;
}

function celsiusParaKeilvin(valorCelsius) {
    return (valorCelsius * 1) + 273.15;
}

campoCelsius.addEventListener("keyup", () => {
    if (isNaN(celsiusParaFahrenheit(campoCelsius.value))) {
        spanFah.replaceChildren(document.createTextNode("-"));
        spanKel.replaceChildren(document.createTextNode("-"));
    } else {
        spanFah.replaceChildren(document.createTextNode(celsiusParaFahrenheit(campoCelsius.value)));
        spanKel.replaceChildren(document.createTextNode(celsiusParaKeilvin(campoCelsius.value)));
    }
})