const resumen = document.getElementById("resumen");
const borrar = document.getElementById("borrar");
const total = document.getElementById("total");
const cantidad = document.getElementById("cantidad");
const select = document.getElementById("select");
const formu = document.getElementById("formu");

resumen.addEventListener("click", (e) => {
  e.preventDefault();
  let n = parseInt(cantidad.value);
  switch (select.value) {
    case "estudiante":
      total.textContent = `Total a pagar: $${200 * 0.2 * n}`;
      break;
    case "trainee":
      total.textContent = `Total a pagar: $${200 * 0.5 * n}`;
      break;
    case "junior":
      total.textContent = `Total a pagar: $${200 * 0.85 * n}`;
      break;
  }
});

borrar.addEventListener("click", (e) => {
  e.preventDefault();
  formu.reset();
  total.textContent = `Total a pagar: $`;
});
