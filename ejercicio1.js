/*
Ejercicio 1: Escribir una función SumArray que tome 2 parametros , un arreglo de
numeros ordenados y un numero. La función devolverá true si cualquier
combinación de 2 números dentro del arreglo suman el número del segundo
parámetro. Sino devolverá False
*/
function SumArray(array,num){
    let valores=[]
    let ultimo=array[array.length-1]
    let estado=false
    for (let i=0;i<array.length;i++){
      for (let z=1;z<array.length;z++) {
        if(array[i]+array[z]===num){
          valores.push('i: '+array[i]+' z: '+array[z])
          if(array[z] === ultimo){
            estado=false
          }else{
            estado=(array[i]+array[z] === num)
          }
        }
      }
    }
    console.log(valores)
    console.log(estado)
  }
  console.log(SumArray([1,2,3,4],5))