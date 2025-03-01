let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
/*Este metodo retorna (4) [1, 2, 3, 4]. Esto se debe al comportamiento que tiene javascript para la asignacion de arrays, en este caso al 
indicar let b = a no esta haciendo que b sea igual a 'a', sino que b esta apuntando al mismo espacio en memoria de a. Por lo tanto, 
al realizar b.push(4) en realidad esta realizando el mismo cambio a 'a'. Por eso es que al mostrar en pantalla el valor de a, se muestran
los valores 1,2,3,4.*/

console.log(0 == '0');
/*Retorna true
En este caso se esta realizando una comparacion no estricta(==). Por lo que entiendo es que javascript esta tomando el valor de 0(numero)
como false y lo compara a '0'(en cadena de texto el cual es true). El porgrama detecta que se esta queriend9o comparar un numero con 
texto por lo cual javascript realiza una conversion y detecta que '0' es una cadena y lo convierte en 0(numero). 
Al final el programa compara cero con cero dando como resultado true.*/


console.log(typeof null);
/*Retorno es object
En este caso javascript retorna como resultado object, debido a un error antiguo en el diseño del lenguaje el cual no han querido resolver
para evitar problemas de compatibilidad con versiones anteriores. Se supone que null era utilizado para un puntero nulo y typeof fue diseñado
para tratar los punteros como objeto. Por esto es que se null se retorna como object. 

*/
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
/*Retorno es 2
Esto retorna 2 debido a la desestructuración de arreglos, en este caso se van asignando las letras conforme la posicion del arreglo.
En este caso x=1, y=2 y si asignaramos otra letra mas ejemplo z, esta tendria el valor de 3.
*/

console.log(1 + '1' - 1);
/*La respuesta es 10
En este caso javascript aplica lo que se llama coerción de tipos(lo que hace es una conversion de tipos para poder realizar la operacion),
lo que sucede es que javascript nota que 1 es un numero y '1' es una cadena de texto, por lo cual convierte el numero 1 en cadena de texto
lo cual seria '1' + '1' que da como resultado '11'(a lo que entiendo en este caso javascript prioriza convertir numeros en cadena de texto 
cuando son sumas y cuando son restas prioriza convertir las cadenas de texto a numero). El siguiente paso es la siguiente operacion '11' - 1,
en este caso se convierte '11' en numero, dando como resultado 11 - 1 = 10. Por eso es que en este caso el resultado mostrado es 10.
*/
