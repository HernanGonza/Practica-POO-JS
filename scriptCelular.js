class Celular {
    constructor(color, peso, rdp, rdc, ram, encendido) {
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = encendido;
    }

    btnEncendido() {
        if (this.encendido == false) {
            this.encendido = true;
            console.log("El celular se esta encendiendo");
        } else {
            console.log("El celular ya esta encendido");
        }
    }

    btnReiniciar() {
        if (this.encendido == true) {
            console.log("El celular se esta reiniciando");
        } else {
            console.log("El celular esta apagado, no se puede reiniciar");
        }
    }

    tomarFoto() {
        if (this.encendido == true) {
            console.log(`El celular ha tomando una foto de ${this.rdc} de resolucion`);
        } else {
            console.log("El celular esta apagado, no se puede tomar una foto");
        }
    }

    mostrarInfo() {
        console.log(`El celular es de color ${this.color}, tiene un peso de ${this.peso} y tiene ${this.ram} de memoria RAM`);
    }

}

const samsung = new Celular('Rojo', "500gr", 6.5, "13mpx", "8gb", false);
const celular2 = new Celular('Azul', "700gr", 5.0, "20mpx", "4gb", false);
const celular3 = new Celular('Verde', "900gr", 4.5, "16mpx", "6gb", false);

'samsung'.btnEncendido();



celular1.btnReiniciar();
celular1.tomarFoto();
celular1.mostrarInfo();

celular3.mostrarInfo();