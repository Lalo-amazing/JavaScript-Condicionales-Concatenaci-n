/*
1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". 
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
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
