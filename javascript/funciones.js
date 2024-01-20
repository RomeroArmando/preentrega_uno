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

    if (msn >= 0 && msn <= array.length) {

        return true;

    } else {

        alert("El id de producto no existe");
        return false;

    }

}

function next_step(a) {

    if (a == 0){

        let est = confirm("Desea cancelar la compra");

        if (est){
            
            carro.splice(0, carro.length);
            alert("❌ compra cancelada!!!");
            menu();

        } else {

            carrito();

        }
    } else if (a == 99){

        
        if (carro.length == 0) {

            alert("El carro esta vacio!!!!");
            carrito();
    
        } else {
            let a = total;

            total = 0;

            mensaje = "Los productos de su carro son:";
    
            for (let i = 0; i < carro.length; i++) {
    
                total += (carro[i].precio_u * carro[i].cantidad);
                
                mensaje += "\n" + carro[i].nombre + "---> cantidad: " + carro[i].cantidad + "---> Precio: " + (carro[i].precio_u * carro[i].cantidad);
                
            }
            console.log(mensaje);
            mensaje += "\n\nEl valor total del carro es " + total;
            console.log(mensaje);
            mensaje += "\n\nDesea comprarlo?";
            
            comp = confirm(mensaje);
            if (comp){

                totalHoy += total;
                cantidadCompras++;
                alert("✅ Compra realizada!!");
                carro.splice(0, carro.length);
                menu();

            } else {

                total = a;
                carrito();
            }
    
        }

    }

    if (carro.length == 0 && check_array(a, producto)) {

        const selec = producto.find((element) => element == producto[a - 1]);

        carro.push({ id: parseInt(selec.id), nombre: selec.nombre, cantidad: 1, precio_u: parseInt(selec.precio) })
        carrito();

    } else {

        const selec = producto.find((element) => element == producto[a - 1]);
        console.table(selec);

        if (check_array(a, producto)) {

            for (let i = 0; i < carro.length; i++) {

                if (carro[i].id == selec.id) {

                    console.log("for");
                    carro[i].cantidad = carro[i].cantidad + 1;
                    carrito();

                }

            }
            carro.push({ id: parseInt(selec.id), nombre: selec.nombre, cantidad: 1, precio_u: parseInt(selec.precio) })
            console.log("paso");

        }

        carrito();

    }


}

function orden(array) {

    for (let i = 0; i < array.length; i++) {

        array[i].id = i + 1;

    }

}