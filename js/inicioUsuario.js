//Variables
const BASE_URL = "http://localhost:3000/";
var logData = JSON.parse(localStorage.getItem('data'));

if (logData == null || logData == undefined) {
    window.location.href = "./index.html";
}

$('form').submit(function (e) {
    e.preventDefault();
    let data = {};
    data.oficio = $('#oficio').val();
    data.mascotas = $('#mascotas').val();
    data.pasatiempo = $('#pasatiempo').val();
    data.idUsuario = logData.idUsuario;

    $('#enviar').attr('disabled', true);
    $.ajax({
        url: BASE_URL + 'datos',
        method: 'post',
        dataType: 'text',
        data: data,
        success: function () {
            alert("Registro exitoso");
            $('#oficio').val("");
            $('#mascotas').val("");
            $('#pasatiempo').val("");
        },
        error: function () {
            $('#enviar').attr('disabled', false);
        }
    });
});

$("#logOut").click(function() {
    localStorage.clear();

    window.location.href = "./index.html";
});