class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto(
  "Fernet Branca 750ml",
  1000,
  "https://shopgallery.vtexassets.com/arquivos/ids/1262618-800-800?v=1778802766&width=800&height=800&aspect=true",
  5
);

console.log(producto1);
producto1.vender();
console.log(producto1);