const bebidas = [
  {
    id: 1,
    name: "quilmes clasica lata",
    type: "cerveza",
    price: 200,
    cantidad: "473ml",
    mayorEdad: true,
    imgUrl: "/img/quilmes-lata.jpg",
  },
  {
    id: 2,
    name: "stella artois lata",
    type: "cerveza",
    price: 310,
    cantidad: "473ml",
    mayorEdad: true,
    imgUrl: "/img/stella-lata.jpg",
  },
  {
    id: 3,
    name: "corona 330ml",
    type: "cerveza",
    price: 300,
    cantidad: "330ml",
    mayorEdad: true,
    imgUrl: "/img/corona-chica.jpg",
  },
  {
    id: 4,
    name: "corona 710ml",
    type: "cerveza",
    price: 530,
    cantidad: "710ml",
    mayorEdad: true,
    imgUrl: "/img/corona-grande.jpg",
  },
  {
    id: 5,
    name: "absolute vodka pomelo",
    type: "vodka",
    price: 2764,
    cantidad: "700ml",
    mayorEdad: true,
    imgUrl: "/img/absolute-pomelo.jpg",
  },
  {
    id: 6,
    name: "skyy original",
    type: "vodka",
    price: 1360,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/skyy-original.jpg",
  },
  {
    id: 7,
    name: "skyy raspberry",
    type: "vodka",
    price: 1650,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/skyy-raspberry.jpg",
  },
  {
    id: 8,
    name: "sernova vodka original",
    type: "vodka",
    price: 1340,
    cantidad: "700ml",
    mayorEdad: true,
    imgUrl: "/img/sernova-original.jpg",
  },
  {
    id: 9,
    name: "ron havana club",
    type: "destilados",
    price: 2140,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/ron-havana.jpg",
  },
  {
    id: 10,
    name: "gin merle",
    type: "destilados",
    price: 1500,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/gin-merle.jpg",
  },
  {
    id: 11,
    name: "fernet branca",
    type: "destilados",
    price: 1500,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/fernet.jpg",
  },
  {
    id: 12,
    name: "emilia malbec",
    type: "vino",
    price: 985,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/vino-emilia.jpg",
  },
  {
    id: 13,
    name: "novecento malbec",
    type: "vino",
    price: 780,
    cantidad: "750ml",
    mayorEdad: true,
    imgUrl: "/img/vino-novecento.jpg",
  },
  //   {
  //     id: 14,
  //     name: "dante robino white blend",
  //     type: "vino",
  //     price: 1000,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/vino-dante.jpg" //   },
  //   {
  //     id: 15,
  //     name: "capriccio dolcezza",
  //     type: "vino",
  //     price: 1000,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/vino-dolcezza.jpg" //   },
  //   {
  //     id: 16,
  //     name: "cynar",
  //     type: "destilados",
  //     price: 1100,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/cynar.jpg" //   },
  //   {
  //     id: 17,
  //     name: "aperol spritz",
  //     type: "destilados",
  //     price: 1500,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/aperol.jpg" //   },
  //   {
  //     id: 18,
  //     name: "cinzano rosso",
  //     type: "destilados",
  //     price: 760,
  //     cantidad: "1000ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/cinzano.jpg" //   },
  //   {
  //     id: 19,
  //     name: "campari",
  //     type: "destilados",
  //     price: 1300,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //     imgUrl: "./img/campari.jpg" //   },
  //   {
  //     id: 20,
  //     name: "paso de los toros pomelo",
  //     type: "sin alcohol",
  //     price: 285,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //     imgUrl: "./img/pasoToros-pomelo.jpg" //   },
  //   {
  //     id: 21,
  //     name: "paso de los toros tónica",
  //     type: "sin alcohol",
  //     price: 285,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //     imgUrl: "./img/pasoToros-tonica.jpg" //   },
  //   {
  //     id: 22,
  //     name: "pepsi clásica",
  //     type: "sin alcohol",
  //     price: 400,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //     imgUrl: "./img/pepsi.jpg" //   },
  //   {
  //     id: 23,
  //     name: "7-Up clásica",
  //     type: "sin alcohol",
  //     price: 395,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //     imgUrl: "./img/7-up.jpg" //   },
  //   {
  //     id: 24,
  //     name: "citric naranja",
  //     type: "sin alcohol",
  //     price: 400,
  //     cantidad: "1L",
  //     mayorEdad: false,
  //     imgUrl: "./img/citric.jpg" //   },
  //   {
  //     id: 25,
  //     name: "hielo",
  //     type: "sin alcohol",
  //     price: 400,
  //     cantidad: "4K",
  //     mayorEdad: false,
  //     imgUrl: "./img/hielo.jpg" //   },
];

function acceso(edad) {
  if (edad < 18) {
    console.log("Acceso denegado");
  } else {
    console.log("Adelante");
    comprar();
  }
}

function render(bebidasFiltradas) {
  let bebidasRenderizar = bebidas;
  if (bebidasFiltradas) {
    bebidasRenderizar = bebidasFiltradas;
  }

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
}

let productos = document.getElementById("productos");
render();

let searchInput = document.getElementById("search");

searchInput.oninput = () => {
  let bebidasFiltradas = bebidas.filter((bebida) =>
    bebida.name.includes(searchInput.value)
  );
  render(bebidasFiltradas);
  console.log(bebidasFiltradas);
};

let botones = document.getElementsByClassName("boton");
let carrito = document.getElementById("carrito");

for (const boton of botones) {
  // e = info del evento
  boton.onClick = (e) => {
    let bebidaBuscada = bebidas.find((bebida) => bebida.id == e.target.id);
    let tarjetaCarrito = document.createElement("div");
    tarjetaCarrito.className = "tarjetaCarrito";
    tarjetaCarrito.innerHTML = `
    <img src= ${bebidaBuscada.imgUrl}>
    <div>
    <h3>${bebidaBuscada.name}</h3>
    <h3>$${bebidaBuscada.price}</h3>
    </div>
    `;
    carrito.append(tarjetaCarrito);
  };
}

// let edad = Number(prompt("¿Cuántos años tenes?"));

// Toastify({
//   text: "This is a toast",
//   duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   },
//   onClick: function () {}, // Callback after click
// }).showToast();
