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


let carro = [{id: 0 , nombre: "ss", cantidad: 1, precio_u: 0}]; //array
//formato {id:, nombre:, cantidad:, precio_u:}

let tag;

let total = 0;

let comp = 0;


function mensaje_precio(t) {

    if (t == 1) {

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "x");

    } else if (t == 2) {

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2);

    } else if (t == 3) {

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3);

    } else if (t == 4) {

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3 + "\n" + producto_4 + " --> " + precio_4);

    } else if (t == 5) {

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3 + "\n" + producto_4 + " --> " + precio_4 + "\n" + producto_5 + " --> " + precio_5);

    }

}


function prods(a) {


    if (a == 1) {

        producto_1 = prompt("ingrese nombre de producto " + a);
        check_text(producto_1, a);
        precio_1 = parseFloat(prompt("ingrese valor del producto " + a));
        check_num(precio_1, a);

    } else if (a == 2) {

        producto_2 = prompt("ingrese nombre de producto " + a);
        check_text(producto_2, a);
        precio_2 = parseFloat(prompt("ingrese valor del producto " + a));
        check_num(precio_2, a);

    } else if (a == 3) {

        producto_3 = prompt("ingrese nombre de producto " + a);
        check_text(producto_3, a);
        precio_3 = parseFloat(prompt("ingrese valor del producto " + a));
        check_num(precio_3, a);

    } else if (a == 4) {

        producto_4 = prompt("ingrese nombre de producto " + a);
        check_text(producto_4, a);
        precio_4 = parseFloat(prompt("ingrese valor del producto " + a));
        check_num(precio_4, a);

    } else if (a == 5) {

        producto_5 = prompt("ingrese nombre de producto " + a);
        check_text(producto_5, a);
        precio_5 = parseFloat(prompt("ingrese valor del producto " + a));
        check_num(precio_5, a);

    }

}

function carrito() {


    mensaje = "Los productos disponibles son:";

    for (let i = 0; i < producto.length; i++) {

        mensaje += "\n" + producto[i].id + "- " + producto[i].nombre + "---> Precio: " + producto[i].precio;
        //console.log(mensaje);
    }



    mensaje += "\n Seleccione lo que desea agregar al carrito"

    if (carro.length == 1) {

        prop = prompt(mensaje);
        console.log(prop);

    } else {

        mensaje += "\n/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ \nCarro actual"

        //formato {id:, nombre:, cantidad:, precio_u:}
        for (let i = 0; i < carro.length; i++) {

            mensaje += "\n" + carro[i].nombre + "---> cantidad:" + carro[i].cantidad + "---> Precio: " + carro[i].precio * carro[i].cantidad;
        }

        prop = prompt(mensaje);
        console.log("else" + prop);

    }

    if (check_array(prop, producto)) {

        if (check_id(carro, producto)){

            carro[id_carro].cantidad++;
            carrito();
            console.log("ss");

        } else {

            id = producto[prop - 1].id;

            nombre = producto[prop- 1].nombre;

            precio = producto[prop - 1].precio

            carro.push[{ id: id, nombre: nombre, cantidad: 1, precio_u: precio }];
            carrito();
            console.log("tt");
        }

        console.log("zz");
    } else {

        console.log("55");
        carrito();

    }

}

function compra() {

    prop = confirm("Desea iniciar una nueva compra?");

    if (prop == true) {

        carrito();

    } else {

        menu();

    }



}

/* ------------------------------ validaciones ------------------------------ */
function check_text(prod) {

    if (prod == null || prod == "" || prod.length < 3) {

        alert("ingrese un nombre real");
        return false;
    }

    return true;

}

function check_num(precio) {

    if (isNaN(precio)) {

        alert("ingrese un valor numerico");
        return false;
    }

    return true;

}

function check_array(msn, array) {

    if (msn != 0 && msn <= array.length) {

        return true;

    } else {

        alert("El id de producto no existe");
        return false;

    }

}

function check_id(a, b) {

    if (a.length == 1) {

        return false;

    } else {

        for (let i = 0; i < a.length; i++) {

            if (a[i].id == b[prop].id) {
    
                id_carro = a[i].id;
    
                return true;
    
            }
    
        }

    }

    return false;
}

function orden(array) {

    for (let i = 0; i < array.length; i++) {

        array[i].id = i + 1;

    }

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

                    producto.splice(precio - 1, 1)

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