const fs = require("fs");
class Contenedor {
    constructor(nombre) {
        this.nombre = nombre + ".txt"
    }
    async save(Product) {
        try {
            if (fs.existsSync(this.nombre)) {
                const data = await fs.promises.readFile(this.nombre, "utf-8");
                const array = JSON.parse(data);
                Product.id = array.length + 1;
                array.push(Product);
                await fs.promises.writeFile(this.nombre, JSON.stringify(array, null, 2));
                return Product.id;
            } else {
                Product.id = 1;
                await fs.promises.writeFile(this.nombre, JSON.stringify([Product], null, 2));
                return Product.id;
            }
        } catch (error) {
            throw new Error("Error al guardar");
        }
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
    /*await productos.save(PRODUCTO1);
    await productos.save(PRODUCTO2);
    await productos.save(PRODUCTO3);*/
    //await productos.getById(0);
    //console.log(await productos.getAll());
    //await productos.deleteById(4);
    //await productos.deleteAll();
    //await productos.save(PRODUCTO4);
})();
