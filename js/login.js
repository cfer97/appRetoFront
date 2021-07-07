const BASE_URL = "http://localhost:3000/";

$("form").submit(function(e) {
    let user = $('#user').val();
    let password = $('#password').val();
    e.preventDefault();
    
    console.log(password);
    $('#login').attr('disabled', true);
    $.ajax({
        url: BASE_URL + 'appReto/' +user ,
        method:'get',
        dataType: 'text',
        success: function (response){
            let data = JSON.parse(response);
            console.log(data);
            console.log(data.password);
            if(data.password == password){
                localStorage.setItem('data', JSON.stringify(data));
                if(data.idRol ==1){
                    window.location.href = "./inicioAdministrador.html";
                } else {
                    window.location.href = "./inicioUsuario.html";
                }
            } else {
                alert("La contraseña no es correcta");
                $('#login').attr('disabled', false);
            }
        }
    });
});