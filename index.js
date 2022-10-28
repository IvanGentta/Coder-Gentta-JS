const bebidas = [
  {
    id: 1,
    name: "Quilmes Clásica Lata",
    type: "cerveza",
    price: 200,
    cantidad: "473ml",
    mayorEdad: true,
  },
  {
    id: 2,
    name: "Stella Artois Lata",
    type: "cerveza",
    price: 310,
    cantidad: "473ml",
    mayorEdad: true,
  },
  {
    id: 3,
    name: "Corona 330ml",
    type: "cerveza",
    price: 300,
    cantidad: "330ml",
    mayorEdad: true,
  },
  {
    id: 4,
    name: "Corona 710ml",
    type: "cerveza",
    price: 530,
    cantidad: "710ml",
    mayorEdad: true,
  },
  {
    id: 5,
    name: "Absolute Vodka Original",
    type: "vodka",
    price: 2764,
    cantidad: "700ml",
    mayorEdad: true,
  },
  {
    id: 6,
    name: "Skyy Original",
    type: "vodka",
    price: 1360,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 7,
    name: "Skyy Raspberry",
    type: "vodka",
    price: 1650,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 8,
    name: "Sernova Vodka Original",
    type: "vodka",
    price: 1340,
    cantidad: "700ml",
    mayorEdad: true,
  },
  {
    id: 9,
    name: "Bacardi Gold",
    type: "ron",
    price: 2860,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 10,
    name: "Bacardi Superior Blanco",
    type: "ron",
    price: 2860,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 11,
    name: "Fernet Branca",
    type: "fernet",
    price: 1500,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 12,
    name: "Emilia Malbec",
    type: "vino",
    price: 985,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 13,
    name: "Novecento Malbec",
    type: "vino",
    price: 780,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 14,
    name: "Dilema Day Chardonnay",
    type: "vino",
    price: 700,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 15,
    name: "Capriccio Dolcezza",
    type: "vino",
    price: 1000,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 16,
    name: "Cynar",
    type: "destilados",
    price: 1100,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 17,
    name: "Aperol Spritz",
    type: "destilados",
    price: 1500,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 18,
    name: "Cinzano Rosso",
    type: "destilados",
    price: 760,
    cantidad: "1000ml",
    mayorEdad: true,
  },
  {
    id: 19,
    name: "Campari",
    type: "destilados",
    price: 1300,
    cantidad: "750ml",
    mayorEdad: true,
  },
  {
    id: 20,
    name: "Paso de los Toros Pomelo",
    type: "sin alcohol",
    price: 285,
    cantidad: "1,5L",
    mayorEdad: false,
  },
  {
    id: 21,
    name: "Paso de los Toros Tónica",
    type: "sin alcohol",
    price: 285,
    cantidad: "1,5L",
    mayorEdad: false,
  },
  {
    id: 22,
    name: "Coca-Cola Clásica",
    type: "sin alcohol",
    price: 400,
    cantidad: "1,5L",
    mayorEdad: false,
  },
  {
    id: 23,
    name: "7-Up Clásica",
    type: "sin alcohol",
    price: 395,
    cantidad: "1,5L",
    mayorEdad: false,
  },
  {
    id: 24,
    name: "Citric Naranja",
    type: "sin alcohol",
    price: 400,
    cantidad: "1L",
    mayorEdad: false,
  },
  {
    id: 25,
    name: "Hielo",
    type: "hielo",
    price: 400,
    cantidad: "4K",
    mayorEdad: false,
  },
];

const comprar = () => {
  let opcion = 0;
  let gastos = 0;
  let compra = 0;

  do {
    opcion = Number(prompt("¿Qué desea hacer?\r1-Comprar\r2-Pagar\r0-Salir"));
    if (opcion == 1) {
      compra = Number(
        prompt(
          "¿Qué desea comprar?\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
        )
      );
      do {
        if (compra == 1) {
          gastos += 1000;
          compra = Number(
            prompt(
              "¿Algo más?\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
            )
          );
        }
        if (compra === 2) {
          gastos += 400;
          compra = Number(
            prompt(
              "¿Algo más?\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
            )
          );
        }
        if (compra === 3) {
          gastos += 650;
          compra = Number(
            prompt(
              "¿Algo más?\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
            )
          );
        }
        if (compra === 4) {
          gastos += 600;
          compra = Number(
            prompt(
              "¿Algo más?\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
            )
          );
        }
        if (compra >= 5) {
          compra = Number(
            prompt(
              "Elija una opcion valida:\r1-Fernet 1L 1000$\r2-Quilmes 1L 400$\r3-Vodka 750cc 650$\r4-Vino 750cc 600$\r0-Salir"
            )
          );
        }
        if (compra == 0) {
          break;
        }
      } while (compra !== 0);
    } else if (opcion === 2) {
      if (gastos == 0) {
        console.log("Usted no tiene nada para pagar");
      } else {
        console.log("Su total es:" + gastos);
        console.log("Gracias por su compra, ¡Hasta pronto!");
        break;
      }
    } else if (opcion === 0) {
      if (gastos !== 0) {
        console.log("Antes de irte pagas " + gastos);
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

let edad = Number(prompt("¿Cuántos años tenes?"));

acceso(edad);
