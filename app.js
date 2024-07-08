let dia = prompt("¿Qué dia de la semana es?");
if (dia == "Sabado" && dia == "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
let numero = prompt("Coloca un número:");
if (numero > 0) {
  alert("El numero es positivo");
} else {
  alert("El numero es negativo");
}

var y = 0;
while (y == 0) {
  let puntuacion = prompt("Ingresa tu puntuación -->");
  if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
    y++;
  } else {
    alert("Intenta nuevamente para ganar ):");
  }
}

let name = prompt("Ingrese su nombre");
let saldo = 1500;
alert(name + " su saldo total es de " + saldo);

alert("Sea bienvenido a la paguina " + name);
