/*
Ejer 3: Crear una función llamada middleCharacter que reciba un String por
parámetro y devuelva sus caracteres del medio ej:”hola” debera retornar la “o”y la”l”
“cosas” deberá retornar una “s”
*/

function mediana(string) {
    
    const l=string.length;
    if(l%2==0){
        return (string.slice(l/2-1, l/2+1))
    }else{
        return (string.slice((l/2), l/2+1))
    }
}
console.log(mediana('cosas'))






// function middleCharacter(string){
//     let letras=[]
//     if (string.length%2 ===0){
//         for(let i=1;i<string.length-1;i++){
//             letras.push(string.charAt(i))
//         }
//     }else if((string.length%1 === 0)&&(string.length%string.length === 0)){
//         // for(let i=2;i<string.length;i++){
//         //     console.log(string.charAt(i))
//         // }
//         letras = string.slice((string.length/2), string.length/2+1)[0]
//     }
//     return letras
// }

// console.log(middleCharacter('franco'))