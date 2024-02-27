//constantes globales 
const titulo = document.querySelector("#titulo")

const encabezado = document.querySelector("#encabezado")

// constantes del modal
const modal = new bootstrap.Modal('#modalCarrito', {});

const btnModalCarrito = document.querySelector("#botonCarro");

const carroModal = document.querySelector("#cuerpoModal");

const bot_mod = document.querySelector("#botones-modal")

// constantes de Tarjetas
const listaProd = document.querySelector("#tarjeta_prod");

const conteo = document.querySelector("#cartCount");


const hilo = document.querySelector("#thead")
const pie = document.querySelector("#foot")

//operadores del loader
const body = document.querySelector('body');

const mostrarLoading = () => { body.classList.remove('loaded') }
const ocultarLoading = () => { body.classList.add('loaded') }

//lee el arreglo sino devulve uno vacio
const listCarro = JSON.parse(localStorage.getItem("carro")) || [];
const carro = new Carro(listCarro)

cartCount.innerText = carro.getCount();

encabezado.innerText = `bienvenido ${JSON.parse(localStorage.getItem("user"))}`

btnModalCarrito.addEventListener('click', function () {



    hilo.innerHTML = //html
        `<tr>
        <th>Producto</th>
        <th>Precio Unitario</th>
        <th>Cantidad</th>
        <th>Total</th>
    </tr>`;

    pie.innerHTML = //html 
        `Precio Total: $ ${carro.getSum()}`;




    renderCarro(carro.getProductos());

    modal.show();

})

const renderCarro = (list) => {

    carroModal.innerHTML = '';

    list.forEach(element => {

        carroModal.innerHTML += //html 

            `<tr>

            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>${element.cantidad}</td>
            <td>${element.precio * element.cantidad}</td>

        </tr>`

    });

}

const renderProductos = (list) => {

    //limpia el generador
    listaProd.innerHTML = '';

    //Renderea a las tarjetas 
    list.forEach(product => {

        listaProd.innerHTML += //html
            `<div class="col">

                <div class="card">
                
                    <h2 class="card-title">${product.nombre}</h2>
                    
                    <img src="${product.img}" class="card-img-top" alt="imagen de ${product.nombre}">
            
                        <div class="div-card">

                            <p class="card-text">Precio: ${product.precio}</p>

                            <a id="${product.id}" class="btn btn-primary btnAgregar">Agregar</a>
                        
                        </div>

                </div>

            </div>`;
    });

    /* ---------------- genera el event listener para los botones --------------- */
    const btn = document.querySelectorAll(".btnAgregar");

    btn.forEach(btn => {


        btn.addEventListener("click", agregarCarro)

    });

    ocultarLoading();
}

const agregarCarro = (a) => {

    console.log(a.target.id);

    const b = producto.find(item => item.id == a.target.id);
    console.table(b);

    carro.addToCart(b);

    console.log(typeof (carro));
    conteo.innerText = carro.getCount();

}



/*
if (titulo.innerText == "Carro || Terceta Preentrega") {

      

} else {

    //console.log(titulo.innerText)
    
    
}
*/

const getProductProm = () => {

    mostrarLoading();

    const endPoint = "../json/data.json";

    fetch(endPoint)
        .then(repuesta => repuesta.json())
        .then(resp => {

            const prod = resp.producto

            renderProductos(prod); 

        }).catch( error => { // Fallo la promesa
            Swal.fire({
                title: "Error",
                text: 'Ocurrio un error',
                icon: "error",
                confirmButtonText: 'Aceptar'
            });

        }).finally ( ()=> {
            ocultarLoading();
        })
}

getProductProm();
