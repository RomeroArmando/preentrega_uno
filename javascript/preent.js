let cantidadCompras = 0;
let cantidadProductos = 0;
let totalHoy = 0;

let mensaje;
let prop;

let producto_1;
let precio_1 = 0;
let producto_2;
let precio_2 = 0;
let producto_3;
let precio_3 = 0;
let producto_4;
let precio_4 = 0;
let producto_5;
let precio_5 = 0;

let tag;

let Total = 0;


function check(prod, precio, q) {
    if (prod != null || !isNaN(precio)) {
        if (prod == "" || prod.length < 3) {

            alert("ingrese un nombre real");
            prods(q);

        }

        if (isNaN(precio)) {
            alert("ingrese un valor numerico");
            prods(q);
        }
    }
}


function prods(a) {



    if (a == 1) {

        producto_1 = prompt("ingrese nombre de producto " + a);
        check(producto_1, 99, a);
        precio_1 = parseFloat(prompt("ingrese valor del producto " + a));
        check(producto_1, precio_1, a);

    } else if (a == 2) {

        producto_2 = prompt("ingrese nombre de producto " + a);
        console.log(producto_2);
        check(producto_2, 99, a);
        precio_2 = parseFloat(prompt("ingrese valor del producto " + a));
        console.log(precio_2 );
        check(producto_2, precio_2, a);

    } else if (a == 3) {

        producto_3 = prompt("ingrese nombre de producto " + a);
        check(producto_3, 99, a);
        precio_3 = parseFloat(prompt("ingrese valor del producto " + a));
        check(producto_3, precio_3, a);

    } else if (a == 4) {

        producto_4 = prompt("ingrese nombre de producto " + a);
        check(producto_4, 99, a);
        precio_4 = parseFloat(prompt("ingrese valor del producto " + a));
        check(producto_4, precio_4, a);

    } else if (a == 5) {

        producto_5 = prompt("ingrese nombre de producto " + a);
        check(producto_5, 99, a);
        precio_5 = parseFloat(prompt("ingrese valor del producto " + a));
        check(producto_5, precio_5, a);

    }

}

function carrito() {

    for (let i = 1; i < 6; i++) {

        prods(i);

        if (i == 1) {

            if (producto_1 == null || isNaN(precio_1)) {
                i = 6;
            }

        } else if (i == 2) {

            if (producto_2 == null || isNaN(precio_2)) {
                i = 6;
            }

        } else if (i == 3) {

            if (producto_3 == null || isNaN(precio_3)) {
                i = 6;
            }

        } else if (i == 4) {

            if (producto_4 == null || isNaN(precio_4)) {
                i = 6;
            }

        } else if (i == 5) {

            if (producto_5 == null || isNaN(precio_5)) {
                i = 6;
            }

        }

        console.log(i);

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

function menu() {

    mensaje = parseInt(prompt("seleccione una opcion" + "\n🛒 Compra: 1" + "\n💵 Total de compras hoy: 2" + "\n🎈 Valor de ultima compra: 3" + "\n🧲 cantidad de compras: 4" + "\n♟ Valor por compras: 5"));

    switch (mensaje) {

        case 1:

            compra();

            break;

        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        case 5:

            break;

        default:

            break;
    }

}

menu();