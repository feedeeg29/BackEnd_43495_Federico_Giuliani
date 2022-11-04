class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }
    addBook(libro, autor) {
        this.libros.push({ libro, autor })
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }
    countMascotas() {
        return (this.mascotas.length);
    }
    getFullName() {
        return (`${this.apellido + "," + this.nombre}`)
    }
    getBookNames() {
        if (this.libros.length == 0) {
            console.log("este usuario no le gusta leer");
        } else {
            const nombreLibros = this.libros.map(function (nombre) {
                return nombre.libro;

            }
            )
            console.log(nombreLibros);

        }

    }
}
}
const usuario1 = new Usuario("Adrian", "Collinguini", ["perro"], []);