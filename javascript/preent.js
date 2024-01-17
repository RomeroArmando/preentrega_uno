let cantidadCompras = 0;
let totalHoy = 0;

let mensaje;
let prop;
/*
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
*/
let tag;

let total = 0;

let comp = 0;


function msn(t){

    if( t == 1){

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "x");

    } else if (t == 2){

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2);

    } else if (t == 3){

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3);
 
    } else if (t == 4){

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3 + "\n" + producto_4 + " --> " + precio_4);

    } else if (t == 5){

        alert("Los productos que usted acaba de agregar son " + "\n" + producto_1 + " --> " + precio_1 + "\n" + producto_2 + " --> " + precio_2 + "\n" + producto_3 + " --> " + precio_3 + "\n" + producto_4 + " --> " + precio_4 + "\n" + producto_5 + " --> " + precio_5);

    }

}
function check_text(prod, q) {

    if (prod == null || prod == "" || prod.length < 3) {

        alert("ingrese un nombre real");
        prods(q);

    }

}

function check_num(precio, q) {

    if (isNaN(precio)) {

        alert("ingrese un valor numerico");
        prods(q);

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

            msn(i);
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

function menu() {

    mensaje = parseInt(prompt("seleccione una opcion" + "\n🛒 (1) Compra" + "\n💵 (2) Total de compras hoy" + "\n🎈 (3) Valor de ultima compra" + "\n🧲 (4) cantidad de compras: 4"));

    switch (mensaje) {

        case 1:

            compra();

            break;

        case 2:

            alert("el valor de todas las compras de hoy es " + totalHoy);
            menu();

            break;

        case 3:

            alert("el valor de la ultima compra de hoy fue " + total);
            menu();

            break;

        case 4:

            alert("la cantidad de compras realizadas hoy fue de " + cantidadCompras);
            menu();

            break;

        default:

            break;
    }

}

menu();