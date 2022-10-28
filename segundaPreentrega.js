const bebidas = [
  {
    id: 1,
    name: "quilmes clasica lata",
    type: "cerveza",
    price: 200,
    cantidad: "473ml",
    mayorEdad: true,
  },
  {
    id: 2,
    name: "stella artois lata",
    type: "cerveza",
    price: 310,
    cantidad: "473ml",
    mayorEdad: true,
  },
  {
    id: 3,
    name: "corona 330ml",
    type: "cerveza",
    price: 300,
    cantidad: "330ml",
    mayorEdad: true,
  },
  {
    id: 4,
    name: "corona 710ml",
    type: "cerveza",
    price: 530,
    cantidad: "710ml",
    mayorEdad: true,
  },
  {
    id: 5,
    name: "absolute vodka original",
    type: "vodka",
    price: 2764,
    cantidad: "700ml",
    mayorEdad: true,
  },
  {
    id: 6,
    name: "skyy sriginal",
    type: "vodka",
    price: 1360,
    cantidad: "750ml",
    mayorEdad: true,
  },
  //   {
  //     id: 7,
  //     name: "Skyy Raspberry",
  //     type: "vodka",
  //     price: 1650,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Sernova Vodka Original",
  //     type: "vodka",
  //     price: 1340,
  //     cantidad: "700ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 9,
  //     name: "Bacardi Gold",
  //     type: "ron",
  //     price: 2860,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 10,
  //     name: "Bacardi Superior Blanco",
  //     type: "ron",
  //     price: 2860,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 11,
  //     name: "Fernet Branca",
  //     type: "fernet",
  //     price: 1500,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 12,
  //     name: "Emilia Malbec",
  //     type: "vino",
  //     price: 985,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 13,
  //     name: "Novecento Malbec",
  //     type: "vino",
  //     price: 780,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 14,
  //     name: "Dilema Day Chardonnay",
  //     type: "vino",
  //     price: 700,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 15,
  //     name: "Capriccio Dolcezza",
  //     type: "vino",
  //     price: 1000,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 16,
  //     name: "Cynar",
  //     type: "destilados",
  //     price: 1100,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 17,
  //     name: "Aperol Spritz",
  //     type: "destilados",
  //     price: 1500,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 18,
  //     name: "Cinzano Rosso",
  //     type: "destilados",
  //     price: 760,
  //     cantidad: "1000ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 19,
  //     name: "Campari",
  //     type: "destilados",
  //     price: 1300,
  //     cantidad: "750ml",
  //     mayorEdad: true,
  //   },
  //   {
  //     id: 20,
  //     name: "Paso de los Toros Pomelo",
  //     type: "sin alcohol",
  //     price: 285,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //   },
  //   {
  //     id: 21,
  //     name: "Paso de los Toros Tónica",
  //     type: "sin alcohol",
  //     price: 285,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //   },
  //   {
  //     id: 22,
  //     name: "Coca-Cola Clásica",
  //     type: "sin alcohol",
  //     price: 400,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //   },
  //   {
  //     id: 23,
  //     name: "7-Up Clásica",
  //     type: "sin alcohol",
  //     price: 395,
  //     cantidad: "1,5L",
  //     mayorEdad: false,
  //   },
  //   {
  //     id: 24,
  //     name: "Citric Naranja",
  //     type: "sin alcohol",
  //     price: 400,
  //     cantidad: "1L",
  //     mayorEdad: false,
  //   },
  //   {
  //     id: 25,
  //     name: "Hielo",
  //     type: "hielo",
  //     price: 400,
  //     cantidad: "4K",
  //     mayorEdad: false,
  //   },
];

const comprar = () => {
  let opcion = 0;
  let gastos = 0;
  let compra = 0;
  let filtro = 0;
  let busqueda = 0;

  do {
    opcion = Number(
      prompt(
        "¿Qué desea hacer?\r1-Ver lista\r2-Buscar\r3-Filtrar Por Categoria\r4-Pagar\r0-Salir"
      )
    );
    if (opcion == 1) {
      const listaCompleta = bebidas.map(
        (bebida) =>
          bebida.id + ": " + bebida.name + " - Precio: $" + Number(bebida.price)
      );
      compra = Number(
        prompt("Que desea comprar?\r0- Para salir\r" + listaCompleta.join("\r"))
      );

      do {
        // -- Comprar --
        if (compra == 1) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 1);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra === 2) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 2);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra === 3) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 3);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra === 4) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 4);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra === 5) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 5);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra === 6) {
          const bebidaSeleccionada = bebidas.find((bebida) => bebida.id === 6);
          gastos += bebidaSeleccionada.price;
          compra = Number(
            prompt("¿Algo más?\r0- Para salir\r" + listaCompleta.join("\r"))
          );
        }
        if (compra > listaCompleta.length) {
          compra = Number(
            prompt(
              "Elija una opcion valida\r0- Para salir\r" +
                listaCompleta.join("\r")
            )
          );
        }
        if (compra == 0) {
          break;
        }
      } while (compra !== 0);
    }

    // -- Buscar --
    else if (opcion === 2) {
      let bebidaBuscada = "";
      do {
        busqueda = prompt("Que desea buscar?\r0- Para salir");

        if (busqueda == 0) {
          break;
        } else {
          // buscar corona 330ml - quilmes clasica lata - skyy sriginal
          for (const bebida of bebidas) {
            if (busqueda == bebida.name) {
              bebidaBuscada = bebida.name + " Precio: $" + bebida.price + "\r";
              prompt(bebidaBuscada);
            }
          }
        }
      } while (busqueda !== 0);

      // -- Filtrar --
    } else if (opcion === 3) {
      filtro = Number(
        prompt("Que desea ver?\r0- Para salir\r1-Cervezas\r2-Vodkas")
      );
      do {
        if (filtro == 1) {
          filtro = prompt(filtrar("cerveza"));
        }
        if (filtro == 2) {
          filtro = prompt(filtrar("vodka"));
        }
        if (filtro == 0) {
          break;
        }
      } while (filtro !== 0);

      // -- Pagar --
    } else if (opcion === 4) {
      if (gastos == 0) {
        console.log("Usted no tiene nada para pagar");
      } else {
        console.log("Su total es: $" + gastos);
        console.log("Gracias por su compra, ¡Hasta pronto!");
        break;
      }

      // -- Salir --
    } else if (opcion === 0) {
      if (gastos !== 0) {
        console.log("Antes de irte pagas $" + gastos);
        console.log("Hasta pronto!");
      } else {
        console.log("Hasta pronto!");
      }
      break;
    } else {
      opcion = Number(
        prompt("Elija una opción valida:\r1-Comprar\r2-Pagar\r0-Salir")
      );
    }
  } while (opcion !== 0);
};

const acceso = (edad) => {
  if (edad < 18) {
    console.log("Acceso denegado");
  } else {
    console.log("Adelante");
    comprar();
  }
};

const filtrar = (tipoBebida) => {
  let listaFiltrada = "";

  const filtrado = bebidas.filter((el) => el.type == tipoBebida);

  for (bebidaFiltrada of filtrado) {
    listaFiltrada +=
      "- " + bebidaFiltrada.name + " precio: $" + bebidaFiltrada.price + "\r";
  }

  return (
    "Tenemos estas opciones de " +
    tipoBebida +
    ":\r" +
    listaFiltrada +
    "\r0- Para volver para atras"
  );
};

let edad = Number(prompt("¿Cuántos años tenes?"));

acceso(edad);
