/*
Ejercicio 2: Crea una función llamada Min que tome 2 parámetros , un arreglo de
números desordenados y un String que va a valer “index” o “value”. Si el String es
“value” la funcion deberá devolver el número mas chico del arreglo. Si el string es
“index” la funcion deberá devolver el indice (posicion) del numero mas chico en el
arreglo.
*/

function Min(array1,string2){
    let min=array1[0]
    let indice=null
    for(let i=0;i<array1.length;i++){
        if(min>=array1[i]){
            min=array1[i]
            indice=i
        }
    }
    switch(string2){
        case 'index':
            return indice
        case 'value':
            return min
    }    
}
console.log(Min([10,5,4,7],'value'));