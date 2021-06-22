/*
Recibes la tarea de construir un sistema de alarma para una fábrica de champús.
Tu sistema recibe las siguientes variables: 
  temperatura ambiente, 
  humedad ambiental, 
  número de trabajadores en la planta y 
  nivel de líquido en los tanques. 
La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales, 
si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo, 
o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).

umbral superior 90% umbral inferior 30%
*/

/*
Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), 
calcule el índice de masa corporal y lo almacene en una variable, 
y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.

*/



/*

Escribir un programa que lea un entero positivo, n , 
introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta n
*/






/*
Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. 
Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete
así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. 
Cada payaso pesa 112 g y cada muñeca 75 g. 
Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.

1KG
*/


function sacartotal(){
  let payasos = parseFloat(prompt("Ingresa los payasos"))
  let munecas = parseFloat(prompt("Ingresa los muñecas"))

  total = ((payasos * 112) / 1000) + ((munecas * 75) / 1000) 
  
  console.log(`Se enviaran ${Math.ceil(total)} paquetes`);
  
}
sacartotal()