class celular {
    constructor(color, peso, rdp, rdc, ram, encendido) {
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = encendido;
    };

    btnEncendido() {
        if (this.encendido == false) {
            this.encendido = true;
            alert(`El celular ${this.nombre} se esta encendiendo`);
        } else {
            alert(`El celular ${this.nombre} ya esta encendido`);
        }
    };

    btnReiniciar() {
        if (this.encendido == true) {
            alert(`El celular ${this.nombre} se esta reiniciando`);
        } else {
            alert(`El celular ${this.nombre} esta apagado, no se puede reiniciar`);
        }
    };

    tomarFoto() {
        if (this.encendido == true) {
            alert(`El celular ${this.nombre} ha tomando una foto de ${this.rdc}mpx de resolucion`);
        } else {
            alert(`El celular ${this.nombre} esta apagado, no se puede tomar una foto`);
        }
    };

    mostrarInfo() {
        alert(`El celular ${this.nombre} es de color ${this.color}, tiene un peso de ${this.peso}gr y tiene ${this.ram}GB de memoria RAM`);
    };

};

const celular1 = new celular('negro', 500, 7, 50, 4, false);
const celular2 = new celular('azul', 600, 6, 60, 6, false);
const celular3 = new celular('rojo', 800, 7.5, 30, 8, false);