function one (number){
    let num = document.getElementById("num");
    num.value += number;
}
function plus (operator){
    let num = document.getElementById("num");
    num.value += operator;
}
function percent (){
    let num = document.getElementById("num");
    num.value = (num.value / 100);
}
function equal (){
    let num = document.getElementById("num");
    num.value = eval (num.value);
}
function clr (){
    let num = document.getElementById("num");
    num.value = "";
}
function del (){
    let num = document.getElementById("num");
    num.value = "";
}
console.log