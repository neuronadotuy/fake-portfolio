/** @format */

document.addEventListener("DOMContentLoaded", () => {
  cargarPortafolio();
});

function cargarPortafolio() {
  fetch("data.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      let html = "";

      data.portafolio.forEach((portafolio) => {
        // Crear el template
        html += `
         <div class="elemento">
            <img src="img/${portafolio.id}.jpg">
            <div class="contenido">
                <h3>${portafolio.nombre}</h3>
                <p>${portafolio.desc}</p>
            </div>
         </div>
         `;

        // Despues de crear el template string
        document.querySelector("#listado").innerHTML = html;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
