//Traigo los botones del el HTML//
let botonAgregar = document.getElementById('botonAgregar');
let botonEncender = document.getElementById('botonEncender');
let botonReiniciar = document.getElementById('botonReiniciar');
let botonFoto = document.getElementById('botonFoto');
let botonInfo = document.getElementById('botonInfo');
let listaTelefonos = document.getElementById('listaTelefonos');

//Clase de los objetos//
class Celular {
    constructor(nombre, color, peso, rdp, rdc, ram, encendido) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = encendido;
    };

    //Metodo de la clase celular para encender el telefono elegido//
    btnEncendido() {
        if (this.encendido == false) {
            this.encendido = true;
            alert(`El celular ${this.nombre} se esta encendiendo`);
        } else {
            alert(`El celular ${this.nombre} ya esta encendido`);
        }
    };

    //Metodo de la clase celular para reiniciar el telefono elegido//
    btnReiniciar() {
        if (this.encendido == true) {
            alert(`El celular ${this.nombre} se esta reiniciando`);
        } else {
            alert(`El celular ${this.nombre} esta apagado, no se puede reiniciar`);
        }
    };

    //Metodo de la clase celular para tomar una foto con el telefono elegido//
    tomarFoto() {
        if (this.encendido == true) {
            alert(`El celular ${this.nombre} ha tomando una foto de ${this.rdc}mpx de resolucion`);
        } else {
            alert(`El celular ${this.nombre} esta apagado, no se puede tomar una foto`);
        }
    };

    //Metodo de la clase celular para mostrar la informacion del telefono elegido//
    mostrarInfo() {
        alert(`El celular ${this.nombre} es de color ${this.color}, tiene un peso de ${this.peso}gr y tiene ${this.ram}GB de memoria RAM`);
    }
};

//Array donde se guardan los telefonos ingresados//
let celulares = [];
function buscarTelefonoParaEncender(nombre) {
    let telefono = celulares.find((telefono) => telefono.nombre == nombre);
    if (telefono) {
        telefono.btnEncendido();
    } else {
        alert('No existe el telefono ingresado');
    }
};

function buscarTelefonoParaReiniciar(nombre) {
    let telefono = celulares.find((telefono) => telefono.nombre == nombre);
    if (telefono) {
        telefono.btnReiniciar();
    } else {
        alert('No existe el telefono ingresado');
    }
};

function buscarTelefonoParaFoto(nombre) {
    let telefono = celulares.find((telefono) => telefono.nombre == nombre);
    if (telefono) {
        telefono.tomarFoto();
    } else {
        alert('No existe el telefono ingresado');
    }
};

function buscarTelefonoParaInfo(nombre) {
    let telefono = celulares.find((telefono) => telefono.nombre == nombre);
    if (telefono) {
        telefono.mostrarInfo();
    } else {
        alert('No existe el telefono ingresado');
    }
};

botonAgregar.addEventListener('click', function () {
    let nombre = prompt('Ingrese el nombre del celular');
    let color = prompt('Ingrese el color del telefono');
    let peso = prompt('Ingrese el peso del telefono en gramos');
    let pantalla = prompt('Ingrese las pulgadas de la pantalla');
    let camara = prompt('Ingrese los pixeles de la camara en mpx');
    let ram = prompt('Ingrese la memoria RAM del telefono en GB');
    celulares.push(new Celular(nombre, color, peso, pantalla, camara, ram, false));
    console.log(celulares);
    listaTelefonos.innerHTML = '';
    celulares.forEach(function (telefono) {
        let telefonoInfo = document.createElement('p');
        telefonoInfo.textContent = `Nombre: ${telefono.nombre}, Color: ${telefono.color}, Peso: ${telefono.peso}gr, Pantalla: ${telefono.pantalla}px, Camara: ${telefono.camara}px, Memoria RAM: ${telefono.ram}GB`;
        listaTelefonos.appendChild(telefonoInfo);
    });

});

botonEncender.addEventListener('click', function () {
    let nombreAEncender = prompt('Nombre del telefono que quiere encender');
    buscarTelefonoParaEncender(nombreAEncender);
});

botonReiniciar.addEventListener('click', function () {
    let nombreAReiniciar = prompt('Nombre del telefono que quiere reiniciar');
    buscarTelefonoParaReiniciar(nombreAReiniciar);
});

botonFoto.addEventListener('click', function () {
    let nombreAFoto = prompt('Nombre del telefono con el que quiere tomar una foto');
    buscarTelefonoParaFoto(nombreAFoto);
});

botonInfo.addEventListener('click', function () {
    let nombreAInfo = prompt('Nombre del telefono que quiere informacion');
    buscarTelefonoParaInfo(nombreAInfo);
})


