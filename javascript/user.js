
//constantes del login 
const bot_log = document.querySelector("#entrar")

const userName = document.querySelector("#name")
const password = document.querySelector("#pass")
const check = document.querySelector("#check")

const disable = document.querySelector(".dis")


bot_log.addEventListener("click", function () {

    console.log(userName.value)


    if (password.value == "" && userName.value == "" && !check.checked) {

        Swal.fire({

            text: 'Ingrese usuario y contraseña para continuar',
            confirmButtonText: 'Cool'

        })

    } else if (userName.value == "") {

        Swal.fire({

            text: 'Tenes que Ingresar un nombre para continuar',
            confirmButtonText: 'Cool'

        })


    } else if (!check.checked && password.value == "") {

        Swal.fire({

            text: 'Ingrese contraseña para continuar',
            confirmButtonText: 'Cool'

        })

    } else {

        localStorage.setItem("user", JSON.stringify(userName.value));
        window.location.href = "carrito.html";

    }

});

check.addEventListener("click", () => {

    console.log(check.checked);

    if (check.checked) {

        disable.innerHTML = ``
    
    } else {
    
        disable.innerHTML =  //html
            `<label >Contraseña</label>
            <input type="password" id="pass" class="form-control" placeholder="contraseña">`
    
    }

});