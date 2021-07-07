//Variables
const BASE_URL = "http://localhost:3000/";
var logData = JSON.parse(localStorage.getItem('data'));

if (logData == null || logData == undefined) {
    window.location.href = "./index.html";
}

$.ajax({
    url: BASE_URL + 'datos',
    method: 'get',
    dataType: 'text',
    success: function (response) {
        let data = JSON.parse(response);
        llenarTabla(data)
    },
    error: function () {

    }
});

function llenarTabla(datos) {
    console.log(datos);
    let longitud = datos['data'].length;

    for (let i = 0; i < longitud; i++) {
        //let rowString = '<tr><th scope="row">' + datos['data'][i].idDatos + '</th><td>' + datos['data'][i].oficio + '</td><td>' + datos['data'][i].mascotas + '</td><td>' + datos['data'][i].pasatiempo + '</td><td>' + datos['data'][i].nombre + '</td><td>' + datos['data'][i].idDatos + '</td></tr>';
        let rowString = '<tr><th scope="row">' + datos['data'][i].idDatos + '</th><td>' + datos['data'][i].oficio + '</td><td>' + datos['data'][i].mascotas + '</td><td>' + datos['data'][i].pasatiempo + '</td><td>' + datos['data'][i].nombre + '</td></tr>';
        $("#tbody").append(rowString);
    }
}

$("#logOut").click(function () {
    localStorage.clear();

    window.location.href = "./index.html";
});