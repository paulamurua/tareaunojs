class Producto {
    constructor(sku, nombre, precio, categoria) {
      this.sku = sku;
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  }
  
  class ProductoEnCarrito {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
      this.categorias = [];
    }
  
    agregarProducto(sku, cantidad) {
      const producto = findProductBySku(sku);
  
      if (producto) {
        let productoEnCarritoExistente = this.productos.find(
          (p) => p.producto.sku === sku
        );
  
        if (productoEnCarritoExistente) {
          productoEnCarritoExistente.cantidad += cantidad;
        } else {
          let nuevoProductoEnCarrito = new ProductoEnCarrito(
            producto,
            cantidad
          );
          this.productos.push(nuevoProductoEnCarrito);
        }
  
        if (!this.categorias.includes(producto.categoria)) {
          this.categorias.push(producto.categoria);
        }
      } else {
        console.log("El producto no existe en la base de datos.");
      }
    }
  
    calcularTotal() {
      let total = 0;
  
      for (let productoEnCarrito of this.productos) {
        total += productoEnCarrito.producto.precio * productoEnCarrito.cantidad;
      }
  
      return total;
    }
  }
  
  function findProductBySku(sku) {
    const productos = [
      new Producto("sku1", "Leche", 50, "Lácteos"),
      new Producto("sku2", "Pan", 20, "Panadería"),
      new Producto("sku3", "Queso", 80, "Lácteos"),
    ];
  
    return productos.find((p) => p.sku === sku);
  }


let carrito = new Carrito();

carrito.agregarProducto("sku1", 2);
carrito.agregarProducto("sku2", 1);
carrito.agregarProducto("sku1", 3);
carrito.agregarProducto("sku4", 1);

console.log(carrito.productos);
console.log(carrito.categorias);
console.log(carrito.calcularTotal());





2

class Carrito {
    constructor() {
      this.productos = [];
      this.categorias = [];
    }
  
    agregarProducto(producto, cantidad) {
      let prodEnCarrito = this.productos.find((p) => p.producto.sku === producto.sku);
  
      if (!prodEnCarrito) {
        prodEnCarrito = new ProductoEnCarrito(producto, cantidad);
        this.productos.push(prodEnCarrito);
  
        if (!this.categorias.includes(producto.categoria)) {
          this.categorias.push(producto.categoria);
        }
      } else {
        prodEnCarrito.cantidad += cantidad;
      }
    }
  
    eliminarProducto(sku, cantidad) {
      return new Promise((resolve, reject) => {
        const prodEnCarrito = this.productos.find((p) => p.producto.sku === sku);
        if (!prodEnCarrito) {
          reject("El producto no está en el carrito.");
        } else {
          if (prodEnCarrito.cantidad < cantidad) {
            prodEnCarrito.cantidad -= cantidad;
          } else {
            const index = this.productos.indexOf(prodEnCarrito);
            this.productos.splice(index, 1);
          }
          resolve();
        }
      });
    }
  }
  
  class ProductoEnCarrito {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad =cantidad;

    }
}
