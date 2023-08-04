const button = document.querySelector("#btn");
const value = 30000;

button.addEventListener("click", function () {
  const cantidad = document.querySelector("#quantityInput").value;
  const color = document.querySelector("#colorInput").value;
  const total = cantidad*value;
  const elementoTotal = document.querySelector("#total");
  const elementoCantidad = document.querySelector("#cantidad");
  const elementoColor = document.querySelector("#color");

  elementoTotal.innerHTML = total;
  elementoCantidad.innerHTML = cantidad;
  elementoColor.style.backgroundColor = color;

});