// acceso a elementos HTML
const btnSortear = document.getElementsByClassName("button-draw");
const btnAgregarAmigo = document.getElementsByClassName("button-add");

const listaAgregarAmigos = document.getElementById("listaAmigos");
const listaMostrarAmigoSecreto = document.getElementById("resultado");
const campoIngresarAmigo = document.getElementById("amigo")

let nombres = [];

let  sorteadoRealizado=false;
let  cantidadAmigos;

function agregarAmigo() {


    amigo = campoIngresarAmigo.value;

    if (amigo ==="") {
        alert("El campo no puede estar vacio")
        return;

    }
    // Reniciar el juego si el usuario añade un nuevo amigo, posterior a realizar un sorteo

    if(sorteadoRealizado){

        listaAgregarAmigos.innerHTML = "";
        listaMostrarAmigoSecreto.innerHTML = "";
        nombres = [];
        sorteadoRealizado = false;
        alert("Renicio")
    }
    // Evita añadir nombres antes ingresados (repetidos)
    if (!nombres.includes(amigo)) {

        cantidadAmigos = cantidadAmigos + 1;
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAgregarAmigos.appendChild(nuevoAmigo);

        // guardamos en el nombre
        nombres.push(amigo);
        cantidadAmigos = nombres.length;
        campoIngresarAmigo.value = "";


    } else {

        alert("Ese nombre ya esta agregado");
        campoIngresarAmigo.value = "";

    }

}
// genera un numero entre 0 y el tamaño del array nombres

function numeroAleatorio() {
    let amigoIndice = Math.floor(Math.random() * cantidadAmigos);

    return amigoIndice;
}

function sortearAmigo() {
    // en base a la cantidad de amigos agregados

    if (cantidadAmigos == 0) {
       
        let ganador = document.createElement("li");
        ganador.textContent = `TU AMIGO ES: ${nombres[0]}`;
        listaMostrarAmigoSecreto.appendChild(ganador);

    } 
    else {
        
        let indiceAmigo = numeroAleatorio(cantidadAmigos);
        console.log(indiceAmigo)
        amigo = nombres[indiceAmigo];

        // mostramos el ganador
        let ganador = document.createElement("li");
        ganador.textContent = `TU AMIGO SECRETO ES: ${amigo}`;
        listaMostrarAmigoSecreto.appendChild(ganador);

        sorteadoRealizado=true;
    }

}
