const fs = require("fs");
class Contenedor {
    constructor(nombre) {
        this.nombre = nombre + ".txt"
        this.id = 0;
        this.productos = [];
    }
    async save(Product) {
        let newProduct = { ...Product, id: this.id };
        this.productos.push(newProduct);
        async function write(archivo, array) {
            try {
                await fs.promises.writeFile(archivo, JSON.stringify(array));
            } catch (err) { throw new Error("Error al guardar") }
        }
        await write(this.nombre, this.productos);
        Product.id = this.id++;
        return newProduct.id
    }
    async getById(id) {
        let elemento
        try {
            let ProdFile = JSON.parse(await fs.promises.readFile(this.nombre, "utf-8"));
            ProdFile.forEach((prod) => {
                if (prod.id == id) {
                    elemento = prod;
                }
            })
            if (elemento) {
                return elemento;
            } else { return null };
        } catch (err) { throw new Error("Error, no se pudo leer el archivo") }
    }
    async getAll() {

        try {
            const allObj = JSON.parse(await fs.promises.readFile("Productos.txt", "utf-8"));
            return allObj;
        } catch (err) {
            throw new Error("Imposible leer");
        }
    }
    async deleteById(id) {
        let newProdFile = []
        try {
            let ProdFile = JSON.parse(await fs.promises.readFile(this.nombre, "utf-8"))
            ProdFile.forEach((prod) => { if (prod.id != id) { newProdFile.push(prod) } })
            await fs.promises.writeFile(this.nombre, JSON.stringify(newProdFile))
            console.log("elemento eliminado exitosamente")
        } catch (err) { throw new Error("Error al eliminar el producto") }
    }

    async deleteAll() {
        let empty = [];

        try {
            await fs.promises.writeFile(this.nombre, JSON.stringify(empty))
            console.log("borrado")
        } catch (err) { throw new Error("Error al escribir archivo") }
    }

}
let productos = new Contenedor("Productos");

const PRODUCTO1 = {
    title: "blukie",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/blukie4.jpg"
};
const PRODUCTO2 = {
    title: "Kashyyk blend",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/kashyyyk2.jpg"
};
const PRODUCTO3 = {
    title: "Red trooper",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/red2.jpg"
};
const PRODUCTO4 = {
    title: "test",
    price: 120,
    thumbnail: "test"
};

(async function () {
    await productos.save(PRODUCTO1);
    await productos.save(PRODUCTO2);
    await productos.save(PRODUCTO3);
    //await productos.getById(0);
    //await productos.getAll()
    await productos.deleteById(1);
    //await productos.deleteAll();
    await productos.save(PRODUCTO4);
})();