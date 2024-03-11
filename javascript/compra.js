const producto = document.querySelector(".prod")

const finalizar = document.querySelector(".finalizar")
const cancelar = document.querySelector(".cancelar")

finalizar.addEventListener("click", function(){

    Swal.fire({
        title: "Esta a punto de comprar este carro!",
        text: "¿Esta seguro?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire({
            title: "Compra realizada",
            text: "Su carro fue comprado con exito!",
            icon: "success"
          }).finally(setTimeout(volverAlCarro, 3000));
        }
      });;

});

const volverAlCarro = () => {

    window.location.href = "carrito.html"
    localStorage.clear("carro");

}

cancelar.addEventListener("click", function(){

    Swal.fire({
        title: "Esta a punto de cancelar esta compra!",
        text: "¿Esta seguro?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire({
            title: "Compra cancelada",
            text: "Su carro fue comprado con exito!",
            icon: "warning"
          }).finally(setTimeout(volverAlCarro, 3000));
        }
      });;

});


const renderCompra = (list) => {

    producto.innerHTML = ``;

    list.forEach(element => {

        producto.innerHTML += //html
            `
        <div class="compra card mb-3">

            <div class="row g-0">

                <div class="col-md-4">

                    <img src="${element.img}" class="img-fluid img-thumbnail rounded-start img-compra">

                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h5 class="card-title">${element.nombre}</h5>

                        <p class="card-text">Cantidad: ${element.cantidad} -/- Precio unitario: ${element.precio}</p>

                        <button id="${element.id}" type="button" class="btn btn-dark btnMenos">-</button>

                        <button id="${element.id}" type="button" class="btn btn-dark btnMas">+</button>

                        <a>Total: ${element.precio * element.cantidad}</a>

                    </div>
                    <button id="${element.id}" type="button" class="btn btn-dark delete">eliminar de carro</button>
                </div>

            </div>

        </div>
        `
        const btnMas = document.querySelectorAll(".btnMas");
        const btnMenos = document.querySelectorAll(".btnMenos");
        const btnDelete = document.querySelectorAll(".delete");

        btnMas.forEach(btn => {

            btn.addEventListener("click", sumarCompra)

        });
        btnMenos.forEach(btn => {

            btn.addEventListener("click", restarCompra)

        });
        btnDelete.forEach(btn => {

            btn.addEventListener("click", eliminarDeCarro)

        });

    });


}

const compra = JSON.parse(localStorage.getItem("carro"));


const eliminarDeCarro = (a) => {

    const prod = compra

    const b = prod.findIndex(item => item.id == a.target.id);

    compra.splice(b, 1);
    renderCompra(compra);
    localStorage.clear("carro");
    localStorage.setItem("carro", JSON.stringify(compra));
}

const sumarCompra = (a) => {

    const prod = compra

    const b = prod.findIndex(item => item.id == a.target.id);

    console.log(compra[b].cantidad);
    compra[b].cantidad += 1;

    renderCompra(compra);
    localStorage.setItem("carro", JSON.stringify(compra));
}

const restarCompra = (a) => {

    const prod = compra

    const b = prod.findIndex(item => item.id == a.target.id);

    if (compra[b].cantidad >= 2) {

        compra[b].cantidad -= 1;

    }
    
    renderCompra(compra);
    localStorage.setItem("carro", JSON.stringify(compra));
}

renderCompra(compra);



