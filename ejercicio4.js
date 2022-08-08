/*
4)Crear una función llamada paresEimpares que reciba 3 parámetros. Los dos primeros
que sean números enteros y el tercero un String. La función tiene que mostrar por
consola los números entre el 0 y el primer parámetro que recibe . Pero debe , en
primer lugar,mostrar todos los números pares. Además, cuando el numero sea
divisible por el segundo parámetro pasado en la función , en vez de mostrarlo por
consola debe imprimir la palabra que recibe como tercer parámetro.
ej: (12,3,mateo) pares e impares del 0 al 12 , cuando sea divisible por 3 el numero
ese mostramos la palabra mateo
*/

const { resolveObjectURL } = require("buffer");

function paresEimpares(value1,value2,string){
    let pares = [];
    let impares = []
    let result = [];
    for(let i=0;i<=value1;i++){
        if(i%2 === 0){
            pares.push(i)
        }else if((i%1===0)&&(i%i===0)){
            impares.push(i)
        }
    }
    for(let i=0;i<pares.length;i++){
        if(pares[i]%value2 === 0){
            pares[i]=string
        }
    }
    for(let i=0;i<impares.length;i++){
        if(impares[i]%value2 === 0){
            impares[i]=string
        }
    }
    
  
    
    return ('Pares: '+pares+' | '+' Impares: '+impares)
}

console.log(paresEimpares(12,3,'mateo'))