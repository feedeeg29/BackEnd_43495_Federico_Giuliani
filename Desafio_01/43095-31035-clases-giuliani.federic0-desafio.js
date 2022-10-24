class Usuario{
    constructor (nombre,apellido) {
    this.nombre= nombre;
    this.apellido = apellido;
    this.mascotas= [];
    this.libros = [];
}
addBook(libro,autor){
    this.libros.push({libro,autor})
}
addMascota(nombreMascota){
    this.mascotas.push(nombreMascota)
}
countMascotas(){
    return(this.mascotas.length);
}
getFullName(){
    return(`${this.apellido + "," + this.nombre}`)
}
getBookNames(){
    const nombreLibros = this.libros.map(function(nombre){
        return nombre.libro;
        
    }
    )
    console.log(nombreLibros);        
        
    }
}

const usuario1 = new Usuario("Adrian","Collinguini",[],[]);