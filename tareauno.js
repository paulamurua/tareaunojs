// ejercicio 1

function PiramideUno(6) {
    let piramide = '';
    for (let i = 1; i <= num; i++) {
      piramide += i;
      console.log(piramide);
    }
  }

  PriramideUno(6);




//ejercicio 3 
class Carrito {
    constructor(montoTotal, productos) {
        this.montoTotal = montoTotal;
        this.productos = productos;
    }
    agregarProducto(nombre, precio, unidades) {

        if (this.productos.indexOf(nombre) === -1) {
            this.productos.push(nombre);
            this.montoTotal = this.montoTotal + precio * unidades
        } else {
            console.log("ya existe " + nombre);

        }
    }
}  


//ejercicio 2

function elementosComunes(array1, array2) {
    let arrayC = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        arrayC.push(array1[i]);
      }
    }
    return arrayC;
  }


  let array1 = ['rojo', 'verde', 'celeste'];
  let array2 = ['blanco', 'negro', 'rojo'];
  let arrayC = elementosComunes(array1, array2);
  console.log(arrayC);




