let a = {};
let b = a;
console.log(a === b);
/*Retorno es true
Cuando se dice que "let a = {}", a sera una variable que contiene un objeto vacio. Luego al decirse que let b = a no significa que 
sean iguales, sucedera lo mismo del ejemplo anterior, b lo que contendra es la misma referencia de memoria de a. Para finalizar al tener
a === b lo que javascript realizar es una comparacion de igualdad estricta, por lo cual se estan comparando es en realidad que ambos apuntan
la misma direccion en la memoria.
*/

/*
let z = 10;
(function() {
  console.log(z);
  let z = 20;
})(); */ 
/*Retorna ReferenceError
-En la primera linea de codigo se inicializa una variable llamada z el cual tendra el valor de 10, se debe entender que esta variable esta 
creada en el ambito global.
-Luego el codigo entra en la funcion comenzando con un console.log el cual analizando deberia de mostrar el numero 10.
Sin embargo en Javascript sucede algo interesante cuando creamos una variable con let, debido a que la declaracion de la variable se eleva
o se toma en cuenta al inicio del bloque o en este caso en la funcion, pero no su asignacion(esto es conocido como hoisting). 
A continuacion muestro un ejemplo de como en teoria el programa lee esta funcion:

(function() {
  let z;
  console.log(z);
  z = 20;
})(); 

Se observa como z se encuentra en un estado llamado Temporal Dead Zone (TDZ), ya que la declaracion se eleva pero aun no se 
ha inicializado. Por lo tanto, en el momento que se entra a la linea console.log(z) la variable z esta en la TDZ(la cual no puede ser usada
aun), lanzando un error de referencia llegando al error que retorna el programa. Ademas, se debe tener en cuenta que la variable z=10 y z=20
aunque tienen el mismo nombre no son las mismas, una se encuentra en el ambito global y la otra solo existe dentro de la funcion.
*/


console.log([] == false);
/*Retorna true
En este caso se esta realizando una comparacion no estricta(==). Por lo cual, el codigo trata de convertir a un tipo comun ambos datos para
poder compararlos. Primero se encuentra que [] == false,  false es un valor primitivo el cual el programa detecta, luego trata
de convertir un array vacio[] en su valor primitivo siendo este "". Luego el programa compara "" ==  false; el cual vuelve a realizar otra 
conversion a numeros que en este caso "" da como resultado 0 y la conversion de false seria 0 tambien. Por ultimo esto quedaria asi segun
el programa console.log(0==0), mostrando como resultado que esto es verdadero. 
*/

console.log(typeof NaN);
/*Retorna number
Primero se debe de tener en cuenta que en Javascript NaN significa(Not a Number), este es utilizado para operacion matematica en las cuales
no tienen un resultado valido por ejemplo dividir 0 entre 0 ó convertir algo que no es un numero. Pero en realidad NaN es de tipo number 
en JavaScript debido a como esta diseñado el lenguaje. 
Por esto es que cuando se usa console.log(typeof NaN), typeof te devuelve "number", porque NaN es en términos de tipo, un valor numérico
pero este en realidad no tiene un valor numerico coherente.
*/

let x = 5;
let y = x++;
console.log(y);
/*La respuesta es 5
-En este caso se pensaria que el valor que muestra el console.log(y) deberia de ser 6 porque le aumentamos 1 al valor de x y se lo asignamos
a la variable y, pero si observamos el resultado no es correcto.
Analizando paso a paso el codigo se observa que primero se crea una variable llamada x la cual se le asigna el valor de 5. Luego creamos
una variable llamada y, que se le asignara el valor de x aumentado en 1. Sin embargo, aqui es donde sucede el porque al mostrar en pantalla
el valor de 'y' es 5 en vez de 6. Lo que sucede es que se utiliza el incremento postfijo que consiste en tomar el valor actual de x
asignandolo a la variable y, para luego aumentar en 1 el valor de la variable x dando como resultado 5.
Por lo tanto, si en vez de console.log(y); utilizamos console.log(x); observaremos que esto es verdad ya que el programa nos 
retornara 6 en vez de 5 que era el valor inicial de x.

*/