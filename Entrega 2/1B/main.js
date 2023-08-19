class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.vendido = false;
    }
  
    vender() {
      this.vendido = true;
    }
  }
  
  const productos = [
    { id: 1, nombre: "copa de vino", precio: 1000 },
    { id: 2, nombre: "gin tonic", precio: 3000 },
    { id: 3, nombre: "fernet", precio: 1200 },
    { id: 4, nombre: "cerveza", precio: 800 },
  ];

  let nombre = prompt("¿Qué deseas tomar?").toLowerCase();
  
  while (nombre != "ESC") {
    let producto = productos.find((item) => item.nombre === nombre);
  
    for (const item of productos) {
      if (item.nombre === nombre) {
        producto = item;
      }
    }
  
    if (producto) {
      let mensaje = `
        Nombre: ${producto.nombre}
        Precio: $${producto.precio}
      `;
  
      alert(mensaje);
    } else {
      alert("No vendemos esa bebida");
    }
  
    nombre = prompt("¿Qué deseas tomar?").toLowerCase();
}

  