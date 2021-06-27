//Variables
const BASE_URL = "https://localhost:3000/";

$('#login').submit(function(){
    let user = $('#user').val();
    let password = ('#password').val();
    

    e.preventDefault();
    
    console.log(password);
    $('#login').atrr('disabled', true);
    $.ajax({
        url: BASE_URL + 'appReto/' +user ,
        method:'get',
        dataType: 'text',
        success: function (response){
            let data = JSON.parse(response);
            console.log('hola');
            console.log(data.password);
            if(data[0].password == password){
                localStorage.setItem('data', JSON.stringify(data[0]));
                if(data[0].idRole ==1){
                    window.location.href = "./admin.html";
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

$('#registro').submit(function(){
    let usuario = $('#usuario').val();
    let password = $('#password').val();
    let nombre = $('#nombre').val();

    $('#registro').attr('disabled', true);
    $.ajax({
        url: BASE_URL +'appReto',
        method:'post',
        dataType:'text',

        
    });
});