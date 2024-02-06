class user{

    constructor(list = []){ //Formato {id, nombre, cantidad, precio_u}

        this.user = list;

    }

    logeo() {

        titulo.innerHTML()

    }

}

//constantes del login 
const bot_log = document.querySelector("#entrar")

const userName = document.querySelector("#name")
//const password = document.querySelector("#pass")

bot_log.addEventListener("click", function () {

    console.log(userName.value)

    
    if (userName.value == "") {

        Swal.fire({

            text: 'Tenes que Ingresar un nombre para continuar',
            confirmButtonText: 'Cool'
            
          })
        

    } else {
        
        localStorage.setItem("user", JSON.stringify(userName.value));
        window.location.href = "carrito.html"

    }

});