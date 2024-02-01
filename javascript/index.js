// constantes del modal
const modal = new bootstrap.Modal('#modalCarrito', {});

const btnModalCarrito = document.querySelector("#botonCarro");

const carroModal = document.querySelector("#cuerpoModal");

const total = document.querySelector("#total")

// constantes de Tarjetas
const listaProd = document.querySelector("#tarjeta_prod");

const conteo = document.querySelector("#cartCount");

//lee el arreglo sino devulve uno vacio
const listCarro = JSON.parse(localStorage.getItem("carro")) || [];
const carro = new Carro(listCarro)

cartCount.innerText = carro.getCount();

btnModalCarrito.addEventListener('click', function () {
    
    total.innerHTML = carro.getSum();

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
}

const agregarCarro = (a) => {

    console.log(a.target.id);

    const b = producto.find(item => item.id == a.target.id);
    console.table(b);

    carro.addToCart(b);

    console.log(typeof (carro));
    conteo.innerText = carro.getCount();

}



renderProductos(producto);