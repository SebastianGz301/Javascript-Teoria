// console.log("Operaciones math ");
// var num1=5;
// var num2=3;
// var suma = num1+num2;
// console.log("la suma es " + suma);

// Control+K+C para comentar

// Control+K+U para quitar comentario

// var respuesta = Math.pow(num1,num2)-(num1/(num2+20));
// console.log("la respuesta de esta potencia es " + respuesta);

// var respuesta = num1++;
// console.log("la respuesta de esta potencia es " + respuesta);

// ---------Uso de if-------------------- ///////////////////////////


// if(num1==4){
//     console.log("Messi>>>>Cr7")
// }
// else if(num1==5){
//     console.log("Es 5 xd")
// }
// else{
//     console.log("Pon un numero bro")
// };


// if(num1%2==0){
//     console.log("Numero par xd")
// }
// else{
//     console.log("Impar god")
// }

//----------------Bucles-------------------------//

// var i = 0
// while(i<10){
//     i+=1
//     console.log(i)
// }


//----------------For-------------------------//

// for(var i=0;i<=10;i+=1){
//     console.log(i)
// }



//----------------Funciones-------------------------//  
// let resultado="capuchino"

// function cafetera(ingre1){
//     if(ingre1=="leche"){
//         return resultado
//     }
// }
// let tasa = cafetera("leche")
// console.log(tasa);




//----------------Codigo que suma dos numeros con HTML (Dom)-------------------------//  
// const txtn1= document.querySelector("#n1")

const txtn1 = document.getElementById("num1")
const txtn2 = document.getElementById("num2")
const respuestaxd = document.getElementById("resp")
const btncalcular = document.getElementById("calcular")
btncalcular.addEventListener('click',calcular)



function calcular(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1+op2	
    respuestaxd.innerText=resp
    respuestaxd.style="color:red"
}

//------ Arrays ----------------------//
const respuesta1 = document.getElementById("answer")
const btnexecute = document.getElementById("execute")
let frutas = ["manzana", "Banana","fresa","pera","xd"]
btnexecute.addEventListener('click',ejecutar)
function ejecutar(){
    // respuesta1.innerText=frutas[frutas.length-1]
    frutas.forEach(function(item,index,array){
        respuesta1.innerText=array
    })
}


async function  obtenerData(){
    // const response=await fetch("http://127.0.0.1:5500/data.json")
    // const json = await response.text()
    // console.log(JSON.parse(json))
    await fetch("http://127.0.0.1:5500/data.json")
    .then(response=>response.json())
    .then(json=> console.log(json))
    .catch(error=>console.log('Solicitud Fallida', error))

}


obtenerData()