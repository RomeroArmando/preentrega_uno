const producto = document.querySelector(".prod")

const renderCompra = (list) => {

    producto.innerHTML = ``;

    list.forEach(element => {

        producto.innerHTML += //html
            `
        <div class="compra card mb-3">

            <div class="row g-0">

                <div class="col-md-4">

                    <img src="${element.img}" class="img-fluid rounded-start">

                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h5 class="card-title">${element.nombre}</h5>

                        <p class="card-text">Cantidad: ${element.cantidad} -/- Precio unitario: ${element.precio}</p>

                        <button id="${element.id}" type="button" class="btn btn-dark btnMenos">-</button>

                        <button id="${element.id}" type="button" class="btn btn-dark btnMas">+</button>

                        <a>Total: ${element.precio * element.cantidad}</a>

                    </div>

                </div>

            </div>

        </div>
        `
        const btnMas = document.querySelectorAll(".btnMas");
        const btnMenos = document.querySelectorAll(".btnMenos");

        btnMas.forEach(btn => {

            btn.addEventListener("click", sumarCompra)

        });
        btnMenos.forEach(btn => {

            btn.addEventListener("click", restarCompra)

        });

    });


}

const compra = JSON.parse(localStorage.getItem("carro"));

const sumarCompra = (a) => {

    const prod = compra

    const b = prod.findIndex(item => item.id == a.target.id);
    
    console.log(compra[b].cantidad);
    compra[b].cantidad += 1;

    renderCompra(compra);
}

const restarCompra = (a) => {

    const prod = compra

    const b = prod.findIndex(item => item.id == a.target.id);
    
    compra[b].cantidad -= 1;

    renderCompra(compra);
}

renderCompra(compra);

