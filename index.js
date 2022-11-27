// --- Funciones ---
function render(bebidasRenderizar) {
  productos.innerHTML = "";

  for (const bebida of bebidasRenderizar) {
    let tarjetaBebida = document.createElement("div");
    tarjetaBebida.className = "producto";
    tarjetaBebida.innerHTML = `
    <img src = ${bebida.imgUrl}>
    <h3>${bebida.name}</h3>
    <h3>$${bebida.price}</h3>
    <button class="boton" id=${bebida.id}>Agregar al carrito</button>
    `;

    productos.append(tarjetaBebida);
  }

  for (const boton of botones) {
    // e = info del evento
    boton.onclick = (e) => {
      let bebidaBuscada = bebidasRenderizar.find(
        (bebida) => bebida.id == e.target.id
      );

      let dentroDeCarrito = storageCarrito.findIndex(
        (bebida) => bebida.id == bebidaBuscada.id
      );

      if (dentroDeCarrito != -1) {
        storageCarrito[dentroDeCarrito].unidades++;
        storageCarrito[dentroDeCarrito].total =
          storageCarrito[dentroDeCarrito].price *
          storageCarrito[dentroDeCarrito].unidades;
      } else {
        storageCarrito.push({
          id: bebidaBuscada.id,
          name: bebidaBuscada.name,
          unidades: 1,
          price: bebidaBuscada.price,
          total: bebidaBuscada.price,
          imgUrl: bebidaBuscada.imgUrl,
        });
      }
      Toastify({
        text: "Item agregado al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      localStorage.setItem("carrito", JSON.stringify(storageCarrito));
      renderCarrito();
    };
  }
}

function renderCarrito() {
  let total = 0;
  carrito.innerHTML = "";

  carrito.innerHTML = `<h1>Carrito</h1>
  `;
  for (const item of storageCarrito) {
    total += item.total;
    let tarjetaCarrito = document.createElement("div");
    tarjetaCarrito.className = "tarjetaCarrito";
    tarjetaCarrito.innerHTML = `
    <img src= ${item.imgUrl}>
    <div>
    <h3>${item.name}</h3>
    <h3>X${item.unidades} $${item.total}</h3>
    </div>
    `;

    carrito.append(tarjetaCarrito);
  }

  carrito.innerHTML += `
  <div class="tarjetaCarritoTotal">
  <h3>Total: $${total} </h3>
  <button id="pagar" class="btnPagar">Pagar</button>
  </div>
  `;

  let pagar = document.getElementById("pagar");
  if (storageCarrito.length > 0) {
    pagar.onclick = () => {
      storageCarrito = [];
      localStorage.clear();
      renderCarrito();
      Swal.fire(
        "¡ Muchas gracias por tu compra !",
        "Vuelva pronto :)",
        "success"
      );
    };
  }
}

function categoria(categoria) {
  const bebidasFiltradasCategoria = bebidasRenderizar.filter(
    (bebida) => bebida.type == categoria
  );
  render(bebidasFiltradasCategoria);
}

// --- Programa ---
let storageCarrito = [];
let bebidasFiltradas = [];
let bebidasRenderizar = [];

let productos = document.getElementById("productos");
let botones = document.getElementsByClassName("boton");
let carrito = document.getElementById("carrito");
let searchInput = document.getElementById("search");

const showCarrito = document.querySelector("#abrir");
const hideCarrito = document.querySelector("#cerrar");

const todo = document.getElementById("todo");
const cervezas = document.getElementById("cervezas");
const destilados = document.getElementById("destilados");
const vinos = document.getElementById("vinos");
const sinAlcohol = document.getElementById("sinAlcohol");

todo.onclick = () => {
  render(bebidasRenderizar);
};
cervezas.onclick = () => {
  categoria("cerveza");
};
destilados.onclick = () => {
  categoria("destilados");
};
vinos.onclick = () => {
  categoria("vino");
};
sinAlcohol.onclick = () => {
  categoria("sin alcohol");
};
showCarrito.addEventListener("click", () => {
  if ((carrito.style.display = "none")) {
    carrito.style.display = "flex";
    hideCarrito.style.display = "flex";
    showCarrito.style.display = "none";
  }
});
hideCarrito.addEventListener("click", () => {
  if ((carrito.style.display = "flex")) {
    carrito.style.display = "none";
    hideCarrito.style.display = "none";
    showCarrito.style.display = "flex";
  }
});

//Fetch
fetch("./bebidas.json")
  .then((res) => res.json())
  .then((bebidas) => {
    bebidasRenderizar = bebidas;
    render(bebidasRenderizar);
  });

//Storage
if (localStorage.getItem("carrito")) {
  storageCarrito = JSON.parse(localStorage.getItem("carrito"));
}
render(bebidasRenderizar);
renderCarrito();
searchInput.oninput = () => {
  bebidasFiltradas = bebidasRenderizar.filter((bebida) =>
    bebida.name.includes(searchInput.value.toLowerCase())
  );
  render(bebidasFiltradas);
};
