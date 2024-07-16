function calc(op){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = document.getElementById("resultado");

    var saida = 0;

    switch(op){

        case '+' : saida = num1 + num2; break;
        case '-' : saida = num1 - num2; break;
        case '*' : saida = num1 * num2; break;
        case '/' : saida = num1 / num2; break;

    }
        
    resultado.value = saida;

}