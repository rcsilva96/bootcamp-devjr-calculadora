function soma(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    var resultado = document.getElementById("resultado");

    var resultadoSoma = num1 + num2;
    resultado.value = resultadoSoma;

}