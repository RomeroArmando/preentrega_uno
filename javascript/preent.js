let cantidadCompras = 0;
let totalHoy = 0;

let mensaje;
let prop;

let producto = [ // array de objetos
    {
        id: 1,
        nombre: "teclado",
        precio: 5000
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 3000
    },
    {
        id: 3,
        nombre: "mochila",
        precio: 1000
    }
];

let id = 0;
let nombre;
let precio = 0;

let id_carro = 0;
let id_prod = 0;


let carro = []; //array
//formato {id:, nombre:, cantidad:, precio_u:}

let tag;

let total = 0;

let comp = 0;

function carrito() {


    mensaje = "Los productos disponibles son:";

    for (let i = 0; i < producto.length; i++) {

        mensaje += "\n" + producto[i].id + "- " + producto[i].nombre + "---> Precio: " + producto[i].precio;
        //console.log(mensaje);
    }


    if (carro.length == 0) {

        mensaje += "\n Seleccione lo que desea agregar al carrito "
        mensaje += "\n \n seleccione (99) para comprar el carro o (0) para cancelar el carro"
        prop = parseInt(prompt(mensaje));
        console.log(prop);

    } else {

        mensaje += "\n\nseleccione (99) para comprar el carro o (0) para cancelar el carro \n\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ \nCarro actual"

        //formato {id:, nombre:, cantidad:, precio_u:}
        for (let i = 0; i < carro.length; i++) {
            let a = carro[i].precio_u;
            let b = carro[i].cantidad;
            mensaje += "\n" + carro[i].nombre + "---> cantidad: " + carro[i].cantidad + "---> Precio: " + a * b;
        }

        mensaje += "\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/";
        prop = parseInt(prompt(mensaje));
        console.log("else" + prop);

    }

    next_step(prop)

}



/* -------------------------- gestion de productos -------------------------- */
function productos() {

    mensaje = parseInt(prompt("Seleccione una opcion" + "\n🗺 (1) Ver Productos" + "\n🔥 (2) Crear Producto" + "\n💧 (3) Eliminar productos"));
    console.log(mensaje.isNaN);

    if (isNaN(mensaje)) {

        menu();

    } else {

        switch (mensaje) {
            case 1:

                mensaje = "Los productos cargados son:";

                for (let i = 0; i < producto.length; i++) {

                    mensaje += "\n" + producto[i].id + "- " + producto[i].nombre + "---> Precio:" + producto[i].precio;
                    console.log(mensaje);
                }

                alert(mensaje);
                productos();
                break;

            case 2:

                prop = confirm("Desea agregar un producto?");

                if (prop) {

                    id = producto.length + 1;

                    do {

                        nombre = prompt("ingrese nombre de producto:");

                    } while (!check_text(nombre));

                    do {

                        precio = parseFloat(prompt("ingrese valor del producto:"));

                    } while (!check_num(precio));

                    prop = confirm("Desea cargar el producto?");

                    if (prop) {

                        producto.push({ id: id, nombre: nombre, precio: precio });
                        productos();

                    } else {

                        alert("❌ carga cancelada")
                        productos();

                    }

                } else {

                    productos();

                }

                break;

            case 3:

                mensaje = "Los productos cargados son:";

                for (let i = 0; i < producto.length; i++) {

                    mensaje += "\n" + producto[i].id + "- " + producto[i].nombre + "---> Precio:" + producto[i].precio;

                }

                mensaje += "\nCual desea eliminar? \n [ingrese el numero correspondiente]";

                do {

                    do {

                        precio = prompt(mensaje);
                        console.log(precio);

                    } while (!check_num(precio));

                    console.log(precio);

                } while (!check_array(precio, producto));

                prop = confirm("Esta seguro que desea eleiminar " + producto[precio - 1].nombre)
                if (prop) {

                    producto.splice(precio - 1, 1);

                    orden(producto);

                    alert("se elimino el producto");

                    productos();

                } else {

                    productos();

                }

                break;

            default:

                break;
        }

    }
}

/* ----------------------------- menu principal ----------------------------- */
function menu() {

    mensaje = parseInt(prompt("seleccione una opcion" + "\n🛒 (1) Carrito" + "\n⚡ (2) Productos" + "\n💵 (3) Total de compras hoy" + "\n🎈 (4) Valor de ultima compra" + "\n🧲 (5) cantidad de compras"));

    switch (mensaje) {

        case 1:

            compra();

            break;

        case 2:

            productos();

            break;

        case 3:

            alert("el valor de todas las compras de hoy es " + totalHoy);
            menu();

            break;

        case 4:

            alert("el valor de la ultima compra de hoy fue " + total);
            menu();

            break;

        case 5:

            alert("la cantidad de compras realizadas hoy fue de " + cantidadCompras);
            menu();

            break;

        default:

            break;
    }

}

menu();