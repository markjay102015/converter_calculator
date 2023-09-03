function KmToM(){
    let num1 = Number(document.getElementById("num1").value);
    let result = (num1 * 1000);
    let num2 = document.getElementById("num2");
    num2.value = result;
}

function reset (){
    let num1 = document.getElementById("num1");
    num1.value = "";
    let num2 = document.getElementById("num2");
    num2.value = "";
}
function CmToM(){
    let num3 = Number(document.getElementById("num3").value);
    let result = (num3 / 100);
    let num4 = document.getElementById("num4");
    num4.value = result;
}
function reset1 (){
    let num3 = document.getElementById("num3");
    num3.value = "";
    let num4 = document.getElementById("num4");
    num4.value = "";
}
function InToM(){
    let num5 = Number(document.getElementById("num5").value);
    let result = (num5 / 39.37007874);
    let num6 = document.getElementById("num6");
    num6.value = result;
}
function reset2 (){
    let num5 = document.getElementById("num5");
    num5.value = "";
    let num6 = document.getElementById("num6");
    num6.value = "";
}
function MmToIn(){
    let num7 = Number(document.getElementById("num7").value);
    let result = (num7 * 0.0393700787);
    let num8 = document.getElementById("num8");
    num8.value = result;
}
function reset3 (){
    let num7 = document.getElementById("num7");
    num7.value = "";
    let num8 = document.getElementById("num8");
    num8.value = "";
}
function DcToM(){
    let num9 = Number(document.getElementById("num9").value);
    let result = (num9 * 0.1);
    let num10 = document.getElementById("num10");
    num10.value = result;
}
function reset4 (){
    let num9 = document.getElementById("num9");
    num9.value = "";
    let num10 = document.getElementById("num10");
    num10.value = "";
}