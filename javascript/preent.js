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


//let carrito = [ ]; //array

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

    producto_1 = "";
    precio_1 = 0;
    producto_2 = "";
    precio_2 = 0;
    producto_3 = "";
    precio_3 = 0;
    producto_4 = "";
    precio_4 = 0;
    producto_5 = "";
    precio_5 = 0;

    let i = 1;

    do {

        prods(i);

        console.log(i);

        tag = confirm("Desea agregar producto mas? (" + i + "/5)");

        if (tag == true) {

            i++;

        } else {

            mensaje_precio(i);
            comp = i;
            i = 6;

        }



    } while (i < 6)

    total = precio_1 + precio_2 + precio_3 + precio_4 + precio_5;

    console.log("s" + comp);
    tag = confirm("El valor de la compra es de " + "\n" + total + "$" + "\nconfirmar compra?")

    if (tag == true) {

        totalHoy = totalHoy + total;

        cantidadCompras++;

        alert("✔ Compra confirmada");

    } else {

        total = 0;

        alert("❌ Compra cancelada");
    }

    menu();

}

function compra() {

    prop = confirm("Desea iniciar una nueva compra?");

    if (prop == true) {

        carrito();

    } else {

        menu();

    }



}

/* -------------------------- area de verificacion -------------------------- */
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

                    if(prop){

                        producto.push({id: id, nombre: nombre, precio: precio});
                        productos();

                    } else{

                        alert("❌ carga cancelada")
                        productos();

                    }

                } else {

                    productos();

                }

                break;

            default:

                break;
        }

    }
}

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