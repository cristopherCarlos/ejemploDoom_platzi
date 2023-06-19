
const h1 = document.querySelector('h1');
const formulario=document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn_calcular');
const pResult= document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    let nu1= parseInt(input1.value);
    let nu2= parseInt(input2.value);
    let suma = nu1+nu2;
    pResult.innerText = "resultado: "+suma;
}
