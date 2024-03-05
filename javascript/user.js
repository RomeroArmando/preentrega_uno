
//constantes del login 
const bot_log = document.querySelector("#entrar")

const userName = document.querySelector("#name")
const password = document.querySelector("#pass")
const check = document.querySelector("#check")
const check2 = document.querySelector("#check2")

const disable = document.querySelector(".dis")
const disable2 = document.querySelector(".dis2")
const disable3 = document.querySelector(".dis3")

//operadores del loader
const body = document.querySelector('body');

const mostrarLoading = () => { body.classList.remove('loaded') }
const ocultarLoading = () => { body.classList.add('loaded') }


bot_log.addEventListener("click", function () {

    console.log(userName.value)


    if (check2.checked) {


        localStorage.setItem("user", JSON.stringify("user"));
        window.location.href = "carrito.html";

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

    } else if (password.value == "" && userName.value == "" && !check.checked) {

        Swal.fire({

            text: 'Ingrese usuario y contraseña para continuar',
            confirmButtonText: 'Cool'

        })

    } else {

        if (check.checked){
            localStorage.setItem("user", JSON.stringify(userName.value));
            window.location.href = "carrito.html";
        }else{
            localStorage.setItem("user", JSON.stringify(userName.value));
            checkpass();
        }
        

    }


});

check.addEventListener("click", () => {

    console.log(check.checked);

    if (check.checked) {

        disable.innerHTML = //html
            `<label >Sin Contraseña</label>`

    } else {

        disable.innerHTML =  //html
            `<label >Contraseña</label>
            <input type="password" id="pass" class="form-control" placeholder="contraseña">`

    }

});

check2.addEventListener("click", () => {

    console.log(check2.checked);

    noUser();

});

const noUser = () => {

    if (check2.checked) {

        userName.disabled = true;
        password.disabled = true;
        check.disabled = true;



        localStorage.setItem("check", JSON.stringify(check2.checked));

    } else {

        userName.disabled = false;
        password.disabled = false;
        check.disabled = false;

        localStorage.setItem("check", JSON.stringify(check2.checked));

    }

}

const checkpass = () => {

    mostrarLoading();

    const endPoint = "../json/data.json";

    fetch(endPoint)
        .then(repuesta => repuesta.json())
        .then(resp => {

            const prod = resp.users

            prod.forEach(element => {

                if (userName.value == element.name && password.value == element.password) {

                    window.location.href = "carrito.html";

                } else if (userName.value != element.name || password.value != element.password) {

                    Swal.fire({
                        title: "Error",
                        text: 'Usuario o contraseña incorrecto',
                        icon: "error",
                        confirmButtonText: 'Aceptar'
                    });

                }

            });

        }).catch(error => { // Fallo la promesa
            Swal.fire({
                title: "Error",
                text: 'Ocurrio un error',
                icon: "error",
                confirmButtonText: 'Aceptar'
            });

        }).finally(() => {
            ocultarLoading();
        })

}

const inicio = () => {

    check2.checked = JSON.parse(localStorage.getItem("check"));

    noUser();

}

inicio();