
/**1. Crear un programa que me pida correo y contraseña, debe dar un alerta si los dos datos ingresados son validos */
function resolver(){
var correo=prompt('Ingrese un correo','@gmail.com');
var contraseña=prompt('Ingrese una contaseña');
if (correo && contraseña ){
    alert('Felicidades los datos ingresados son correctos')
}else {
    alert('Los datos no son validos')
}
var rellenocorreo =document.getElementById("correo")
rellenocorreo.value =correo;
var rellenoContraseña=document.getElementById("contra");
rellenoContraseña.value =contraseña ;
}

/**2. Crear un programa que solo permita ingresar a una persona a un bar si el usuario es mayor de 18 años y su color de remera es roja */

function resolverEjercicio2(){
   var edad =Number(prompt('Ingrese su edad ','solo mayores de 18'));
   var colorRemera =prompt('ingrese el color de su remera');
   if (edad> 18 && colorRemera =="rojo"){
       alert('Ingrese tranquilo ...beba con moderacion')
   }else {
       alert('no puede ingresar')
   }
   var rellenoEdad=document.getElementById("edad");
   rellenoEdad.value=edad;
   var rellenoColor= document.getElementById("color");
   rellenoColor.value= colorRemera;
}
/**3. Crear un programa que pida dos notas, evalue el promedio. Debe mostrar un alerta de "Materia aprobada" si las dos primeras notas son mayores a 7 y si el promedio es mayor a 7 */
 function resolverEjercicio3(){
     var nota1=Number(prompt('ingrese su nota'));
     var nota2=Number(prompt('ingrese su nota'));
     var promedio=(nota1 +nota2)/2;
     if (nota1>7&&nota2>7 && promedio>7){
         alert('Materia aprobada')
     }else {
         alert('DESAPROBADO')
     }
     var rellenoNota1 =document.getElementById("nota1");
     rellenoNota1.value = nota1;
     var rellenoNota2= document.getElementById("nota2");
     rellenoNota2.value=nota2;
     var rellenoPromedio=document.getElementById("promedio");
     rellenoPromedio.value =promedio;
 }

