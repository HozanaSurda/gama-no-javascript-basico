console.log('javascript carregado');

function validacpf(cpf) {
    // valida o tamanho do CPF
    if (cpf.length != 11){
        return false;
    } else {
        // pega os valores necessários para validacao
        var primeiros9digitos = cpf.substring (0 , 9);
        var ultimos2digitos = cpf.substring (9);
        var primeiros10digitos = cpf.substring (0 , 10);
        
        /*
        console.log('primeiros nove digitos do cpf: ', primeiros9digitos);
        console.log('ultimos dois digitos do cpf: ', ultimos2digitos);
        console.log('primeiros dez digitos do cpf: ', primeiros10digitos);
        */

        // valida primeiro digito do CPF
        var soma = 0;
        for (var i = 10; i > 1; i--){
            soma += primeiros9digitos.charAt (10-i) * i;
        }
        var resultado;
        if((soma % 11) < 2) {
            resultado = 0;
        }
        else {
            resultado = 11 - (soma % 11);
        }
        if (resultado != ultimos2digitos.charAt (0)){
            return false;
        }

        // validando segundo digito do CPF
        soma = 0;
        for (var i = 11; i > 1; i--) {
            soma += primeiros10digitos.charAt(11 - i) * i; 
        }
        //resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        var resultado;
        if ((soma % 11) < 2) {
            resultado = 0;
        }
        else{
            resultado = 11 - (soma % 11);
        }
        if (resultado != ultimos2digitos.charAt(1)) {
            return false;
        }
        
        // chegou ate aqui, entao o CPF eh valido.
        return true;

    }
}


function validacao () {
    console.log ('iniciando validacao de cpf')

    var cpf= document.getElementById ('cpf_digitado').value;
    
    var resultadovalidacao = validacpf (cpf);
    
    if (resultadovalidacao === true) {
        document.getElementById ('success').style.display ='block';
    }else{
        document.getElementById('error').style.display = 'block'
    }
}











//var operador = 1;
//var operando = 50;
//var resultado = operador * operando;
//console.log (resultado);

//var nome='Paula ';
//var sobrenome= 'Sousa';
//var nomecompleto=nome + sobrenome;
//console.log(nomecompleto)

//var primeirovalor = 10;
//var segundovalor  = '3';
//var resultado = primeirovalor - segundovalor;
//console.log (resultado);

