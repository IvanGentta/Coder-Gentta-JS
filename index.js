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
