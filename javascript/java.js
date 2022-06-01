const sexo = prompt("ingrese sexo femenino o masculino");
const edad = parseInt(prompt("ingrese su edad"))
if (sexo == "Masculino" && edad >= 65 || sexo == "Femenino" && edad >= 60) {
    alert("Felicidades ya puedes jubilarte!");
} else {
    alert("Aún no puedes jubilarte");
}





