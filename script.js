$(document).ready(function(){

    $("#phone").mask("(00) 00000-0000", { 
        placeholder: "(**) *****-****",
    });

    $('form').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
        },
        messages:{
            name:"Por favor, preencha o campo de nome",
            email: "Por favor, preencha corretamente o campo de email",
            phone: "Por favor, preencha o campo de telefone",
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem: ${camposIncorretos} campos incorretos.`)
            }
        }
    })

})