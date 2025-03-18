// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos  = [];
let listaHtml= document.getElementById("listaAmigos") ;
let nuevoNombre;
//funcion que recibe el nomre y lo pone en el arreglo
function agregarAmigo(){
   let  nombre = document.getElementById("amigo").value;
   
    if(nombre === ""){
        alert('Ingrese nombre');
    }
    else{
        nombresAmigos.push(nombre);
        nuevoNombre =document.createElement("li");
        nuevoNombre.textContent = nombre ;
        listaHtml.appendChild(nuevoNombre);
    }
     limpiarBarra();
   //  elegirNombre();
  //  console.log(nombresAmigos);
}



function elegirIndice(){
    let tamanioLista = nombresAmigos.length;
      //  console.log(tamanioLista);
        let indice = Math.floor(Math.random()*tamanioLista);
       // console.log(indice);
        return indice;
}

function sortearAmigo(){
    let indice= elegirIndice();
    if(nombresAmigos.length === 0){
        alert("Lista vacia, por favor ingrese nombres");
    }
    else{
        
        let ganador= nombresAmigos[indice];
       // console.log("ganador"+ganador);
        alert("El ganador es :  "+ganador);
    }
}

//funcion que limpia la barra en espera de otro nombre
function limpiarBarra(){
    document.querySelector('#amigo').value = '';

}

document.addEventListener('keyup',function(event){
    if (event.key === 'Enter') {
        agregarAmigo();
    }
})

function reiniciar(){
    limpiarBarra();
    nombresAmigos.length=0;
    while (listaHtml.firstChild) {
        listaHtml.removeChild(listaHtml.firstChild);
    }
}


