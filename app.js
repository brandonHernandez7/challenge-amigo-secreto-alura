
var btnSortear = document.getElementsByClassName("button-draw");
var btnAgregarAmigo = document.getElementsByClassName("button-add");

var listaAgregarAmigos = document.getElementById("listaAmigos");
var listaMostrarAmigoSecreto = document.getElementById("resultado");
var campoIngresarAmigo = document.getElementById("amigo")

var  sorteadoRealizado=false;

var cantidadAmigos;

let nombres = [];


function agregarAmigo() {


    amigo = campoIngresarAmigo.value;
    if (amigo ==="") {
        alert("El campo no puede estar vacio")
        return;

    }

    if(sorteadoRealizado){

        listaAgregarAmigos.innerHTML = "";
        listaMostrarAmigoSecreto.innerHTML = "";
        nombres = [];
        sorteadoRealizado = false;
        alert("Renicio")
    }

   
    // si el nombre no se repite, se puede agregar amigos
    
    if(!nombres.includes(amigo)){
        // agregamos el amigo
        

        cantidadAmigos = cantidadAmigos + 1;
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAgregarAmigos.appendChild(nuevoAmigo);

        // guardamos en el nombre
        nombres.push(amigo);
        // guardamos la cantidad
        cantidadAmigos=nombres.length;

        // limpiamos el campo
        

        campoIngresarAmigo.value = "";

      
    }else{

        alert("Ese nombre ya esta agregado");
        campoIngresarAmigo.value = "";

    }

}

function numeroAleatorio() {
    let amigoIndice = Math.floor(Math.random() * cantidadAmigos);

    return amigoIndice;
}

function sortearAmigo() {
    if (cantidadAmigos == 0) {
        // solo agrego a un amigo
        let ganador = document.createElement("li");
        ganador.textContent = `TU AMIGO ES: ${nombres[0]}`;
        listaMostrarAmigoSecreto.appendChild(ganador);

    } // agrego a almenos 2 amigos
    else {
        // generamos un indice entre 0 y cantidadAmigos, quien representa en orden de entrada a un amigo (indice), en el array nombres[]
        let indiceAmigo = numeroAleatorio(cantidadAmigos);
        console.log(indiceAmigo)
        amigo = nombres[indiceAmigo];

        // mostramos el ganador
        let ganador = document.createElement("li");
        ganador.textContent = `TU AMIGO SECRETO ES: ${amigo}`;
        listaMostrarAmigoSecreto.appendChild(ganador);

        // sorteo realizado  una vez
        sorteadoRealizado=true;
    }

}
