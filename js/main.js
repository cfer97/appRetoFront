//Variables
const BASE_URL = "http://localhost:3000/";


$('form').submit(function(e){
    e.preventDefault();
    let data = {};
    data.usuario = $('#usuario').val();
    data.password = $('#password').val();
    data.nombre = $('#nombre').val();

    console.log(data);
    $('#enviar').attr('disabled', true);
    $.ajax({
        url: BASE_URL +'appReto',
        method:'POST',
        dataType:'text',
        data: data,
        success: function () {
            alert("Registro exitoso");
            window.location.href="./index.html";
        },
        error: function() {
            $('#enviar').attr('disabled', false);
        }
    });
});