let nombre = "paula";
let num1= 20;
//declare y le di valor a la variable, osea inicialice la variable. 

nombre= "romina"; // reasingnacion de la variable 
apellido= "murua";
const NUMERO = 10; //la constante no puede reasignar el valor, siempre va ser el mismo. 
//Y SE DECLARAN CON MAYUSCULA. SE DECLARAN E INICIALIZAN A LA VEZ. 

let nombreCompleto= nombre + apellido; //concatenacion de variables.

//let nombreCompleto2= nombre + "jackson"
//let sensacionTerm= temp + "grados"
let suma= num1 + NUMERO;

//Metodos de entrada y salida :  consola la mas importante
//console.log("La suma da" +" "+ suma);

//alert
//alert("hola paulita")

//promp
//let usuario= prompt("ingresa tu nombre");
//let edadUsuario= prompt("ingresa tu edad");
//console.log(usuario);
//console.log(edadUsuario);

//num1= prompt("ingresa un numero");
//console.log(num1);

//let numeroSumar= prompt("ingresa numero a sumar");
//let numeroSumar2= prompt("ingresa numero a sumar");
//numeroSumar= parseInt(numeroSumar);
//numeroSumar2=parseInt(numeroSumar2)

//et resultado= numeroSumar + numeroSumar2;
//alert(resultado);

//let nombre3= prompt("ingresa tu nombre");
//alert("Hola" +" "+ nombre3 + "!");

//let numero20= prompt("ingresa un numero");
//numero20=parseFloat(numero20);
//let resultado20= numero20 + numeroSumar2
//console.log(resultado20);

//let texto= prompt("escribi un texto");
//let texto2= prompt("escribi un texto mas");
//let resultadoTexto= texto + " "+texto2
//alert(resultadoTexto);
 

//control de flujos

let temp= 29

/*if (temp == 30) {
 console.log("hace calor");   
}else{
    console.log("hace frio");
}

let decision= prompt("para donde vamos? arcoiris o cascada")
if (decision== "arcoiris") {
    console.log("nos salvamos");
} else {
    console.log("nos caimos");
} */


//if anidado

  let usuarioGuardado="dani";

   let passGuardado= "12345";

 /*  let usuario= prompt("ingresa tu usuario");

 if (usuario==usuarioGuardado) {

 let passUsuario= prompt("ingrese su contraseña")
 //if anidado
 if (passGuardado==passUsuario) {
    alert("Bienvenido" + usuarioGuardado)
 } else {
     alert("credenciales incorrectas")
 }

 } else {
     alert("usuario no encontrado")
    
 } */

 // if concatenado

 /*let talle= 520;

 if (talle > 100) {
    console.log("XL"); 
 } else if (talle >80 ) {
    console.log("L");
 } else if (talle > 60) {
    console.log("M");
 } else if (talle > 40) {
    console.log("S");
 } else {
    console.log("XS");
 } */


// && devuelve true cuando ambas condiciones son true

 /*let usuario = prompt("escribe tu usuario");
 let pass = prompt("escribe tu password");

 if (usuarioGuardado === usuario && passGuardado === pass)
  {
     alert("bienvenido "+ usuarioGuardado)

 } else {
    alert("credenciales invalidas")
 } */

 // || OR devuelve true si una de las condiciones son true
 
 /*let usuario = prompt("escribe tu usuario");
 let pass = prompt("escribe tu password");
 if (usuarioGuardado === usuario || passGuardado === pass)
 {
    alert("bienvenido "+ usuarioGuardado)

} else {
   alert("credenciales invalidas")
} */



/*let nombrePila = "pau";
let nombreMascotas = "luli amaika gina";

 let pila = prompt("ingresa tu nombre pila")
 let mascotas= prompt("ingresa el nombre de tus mascotas")

if (pila === nombrePila) {
   alert("BIENVENIDO/A" + pila)
} else {
   alert("error")
} */


// CICLOS E ITERACIONES : BUCLES Q SE REPITEN HASTA Q SE LLEGA AL NUMERO O OBJETIVO. FOR, WHILE, DO WHILE

/*for (let i=0; i < 10; i++) {
   console.log("conteo: " + i);
   
} */

/*for (let i = 0; i < 3; i++) {

   alert("ya llegamos");
   alert("no");
   
}
alert("a ver .. ya") */



//BREACK sentencia

let pañabraClave= "oruga";

/*for (i =0; i <=3; i++) {
  let ingreso=prompt("ingresa pal clave");
   if (pañabraClave===ingreso) {
      alert("adivinaste")
      break
   }
} */


//continue sentencia: permite realizar saltos dependiendo una condicion

/*for (let i = 0; i < 10; i++) {
   if (i==3) {
      console.log("salteo"); //para imprimir otra cosa ya q saltea el numero
      continue
   }
   console.log(i);
}*/



//while MIENTRAS QUE

/*let ingreso= prompt("llegamos a la india");

while (ingreso != "si") {
 //CONDICION DE SALIDA
   ingreso=prompt("llegamos a la INDIA");
}

alert("llegamos");*/



/*let ingreso= prompt("ingresa un producto. para salir 0");

while (ingreso != "0") {
   
   //condicion de salida
   ingreso= prompt("ingresa un producto. para salir 0");
} */


//DO WHILE 

/*do {
   
} while (condition); */

let empresaNombr= "santex";

/*for (let i = 0; i < 3; i++) {
  let empresa=prompt("ingresa nombre empresa");
  if (empresa===empresaNombr) {
   alert("pues claro cariño");
   break
  }
} 
alert("tas equivocada")*/

/*prod1= prompt("cargar prod1")
prod2= prompt("cargar prod2")
prod3= prompt("cargar prod3")
prod4= prompt("cargar prod4")

if (prod1 !="" && prod2 !="" && prod3 !="" && prod4 != "") {
   console.log("el producto 1 es:" + prod1 + " \n el producto 2 es:" + prod2);
} else {
   alert("error cargar todos los productos")
}*/

/*alert("bienvenido al banco perritos");
let pinGuard= "5701";
let ingresar=false;

//intentos ingreso
for (let i = 2; i >= 0; i--) {
  let ingreso= prompt("ingresa tu pin") ;
 if (pinGuard=== ingreso) {
   alert("bienvenido cliente, ya podes operar");
   ingresar= true;
   break
 } else { alert("error");

      
 }
}*/

//mostrar menu
/*if (ingresar=true) {
   let saldo= 20000
  let menu= prompt("elegi una opcion: \n1-saldo. \n2- retiro dinero. \n3 deposito. \npresiona X para finalizar.");

while (opcion != "x") {
   if (opcion=="1") {
      alert("tu saldo es: $"+ saldo)
   } else if (opcion== "2") {
      let retiro= parseInt(prompt("ingresa el monto a retirar"))
   }

   //condicion de salida
   let opcion= prompt("gracias por visitarnos.");
}


} else {
   alert("elegi una opcion: \n1-saldo. \n2- retiro dinero. \n3 deposito. \npresiona X para finalizar.")
}*/


/*function saludar(parametro) {
   //bloque de ejecucion
   console.log("hola cariño "+parametro );
}
//llamado a la funcion
saludar()

function saludarNombreMom(nombre,momento) {
 console.log("hola "+ nombre+ ", bueno/as "+ momento);   
}

saludarNombreMom ("pau","dias")*/

/*let usuarios= "paula"
let usuario5=prompt("ingresa tu nombre")
if (usuario5==usuarios) {
   alert("fui yo")
} else {
   alert("yo no fui")
}*/


/*let tecla=prompt("escribi una tecla")
if ((tecla==="y") || (tecla==="Y")) {
   alert("correcto")
} else {
   alert("incorrecto")
}*/


/*let numero=prompt("escribi un numero del 1 al 4")
if (numero== "1") {
   alert("homero")
} else if (numero==2){

} else if () {

}*/

/*let numero=prompt("ingresa num");
if (numero <= "1000") {
   alert("presu bajo");
} else if ((numero<= "3000") && (numero >= "1001" )) {
   alert("presu medio");
} else if(numero > "3000") {
   alert("presu alto")
}*/






/*let numero=prompt("escribi un numero");
let texto=prompt("escribi un texto");

for (let i = 0; i <= numero ; i++) {
   alert(texto);
}*/

/*let numero=prompt("escribi un numero");
for (let i = 0; i < numero; i++) { 
   if (i > 3) {
      break
   }
   alert("lado");
}*/



/*let usuario

for (let index = 0; i<5; index++) {
   let usuario=prompt("alumno")+"\n";
   
} alert(usuario);*/



//ejerc q no entendi

/*let personajes=prompt("ingresa pers");

while (personajes!= "voldemort") {
  
}*/ 



/*let numeroo=prompt("ingresa un numero del 1 al 4");

while (numeroo!= ESC) {
   switch (numeroo) {
      case "1":
         alert("tomate");
         break;
      case "2":
         alert("papa");
         break;
      case "3":
         alert("carne");
         break;
      case "4":
         alert("pollo");
         break;
      default:
         alert("error");
         break;
   } numeroo=prompt("ingresa un numero del 1 al 4")
} */



/*function entrada() {
   return=prompt("ingresa valor");
   
}



function procesamiento(valor) {
   return "la estrada es" + valor
}

function salida(valor) {
   alert(valor);
}


salida(procesamiento(entrada()));
*/

/*function decimal(numero) {
   return Math.round(numero);

}

for (let i = 5; i >0; i--) {
   let num=prompt("ingresa numero");
   console.log(decimal(num));
   
}*/


/*function impuesto (precio, porcentaje) {
   return precio + ((precio*porcentaje) /100);

}
for (i =0 <5 ; i++) {
   let resultado= impuesto (parseFloat(prompt("ingresar precio ")));
     (parseFloat(prompt("ingresa porcentaje")));
  
   alert(resultado);
} */


function validacion(cadena){
   return cadena!="";
}

let valor= prompt("ingresar cadena")
while () {
   
}