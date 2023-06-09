//converter de celsius para fahrenheit

const celsiusToFarenheit = (celsius) => {
  celsius = document.querySelector("#temperatura");
  const valor = parseFloat(temperatura.value);
  let resultado = valor * 1.8 + 32;

  return resultado.toFixed(2);
};
//converter de fahrenheit para celsius
const farenheitToCelsius = (temperatura2) => {
  temperatura2 = document.querySelector("#temperatura2");
  const valor = parseFloat(temperatura2.value);
  const resultado = (valor - 32) / 1.8;
  return resultado.toFixed(2);
};

//converter de celsius para kelvin 3
const celsiusToKelvin = (temperatura3) => {
  temperatura3 = document.querySelector("#temperatura3");
  const valor = parseFloat(temperatura3.value);
  const resultado = valor + 273.15;
  return resultado.toFixed(2);
};

//converter de kelvin para celsius 4

const kelvinToCelsius = (temperatura4) => {
  temperatura4 = document.querySelector("#temperatura4");
  const valor = parseFloat(temperatura4.value);
  const resultado = valor - 273.15;
  return resultado.toFixed(2);
};

//converter de kelvin para fahrenheit 5
const kelvinToFahrenheit = (temperatura) => {
  const valor = parseFloat(temperatura);
  const resultado = (valor * 9/5) - 459.67;
  return resultado.toFixed(2);
};

//converter de fahrnheit para kelvin 6

const farenheitToKelvin = (temperatura6) => {
  temperatura6 = document.querySelector("#temperatura6");
  const valor = parseFloat(temperatura6.value);
  const resultado = (valor + 459.67) / 1.8;
  return resultado.toFixed(2);
};

//chamada dos eventos de click

const clicar = () => {
  let imprimir1 = (document.querySelector(
    "#resultado"
  ).innerHTML = `A temperatura em Fahrenheit é: ${celsiusToFarenheit()} F°`);
  const res = document.querySelector("#resultado");
  res.style.display = "block";
};

const clicar2 = () => {
  let imprimir2 = (document.querySelector(
    "#resultado2"
  ).innerHTML = `A temperatura em graus Celsius é: ${farenheitToCelsius()} C°`);

  const res2 = document.querySelector("#resultado2");
  res2.style.display = "block";
};

const clicar3 = () => {
  let imprimir3 = (document.querySelector(
    "#resultado3"
  ).innerHTML = `A temperatura em graus Kelvin é: ${celsiusToKelvin()} K°`);
  const res3 = document.querySelector("#resultado3");
  res3.style.display = "block";
};

const clicar4 = () => {
  let imprimir4 = (document.querySelector(
    "#resultado4"
  ).innerHTML = `A temperatura em graus Celsius é: ${kelvinToCelsius()} C°`);
  const res4 = document.querySelector("#resultado4");
  res4.style.display = "block";
};

const clicar5 = () => {
  const temperaturaInput = document.querySelector("#temperatura5");
  const temperatura = temperaturaInput.value;
  
  const resultadoFahrenheit = kelvinToFahrenheit(temperatura);
  
  const resultadoElement = document.querySelector("#resultado5");
  resultadoElement.innerHTML = `A temperatura em graus Fahrenheit é: ${resultadoFahrenheit} °F`;
  resultadoElement.style.display = "block";
};

const clicar6 = () => {
  let imprimir4 = (document.querySelector(
    "#resultado6"
  ).innerHTML = `A temperatura em graus Fahrenheit é: ${farenheitToKelvin()} F°`);
  const res6 = document.querySelector("#resultado6");
  res6.style.display = "block";
};
