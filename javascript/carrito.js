class Carro {

    /* ----------- crea el array donde estaran los productos de carro ----------- */
    constructor(list = []) { //Formato {id, nombre, cantidad, precio_u}
        this.cart = list;
    }

    addToCart({ id, nombre, precio }) {

        //busco el producto
        const index = this.cart.findIndex(product => product.id == id);
        if (index == -1) {

            this.cart.push({ id, nombre, precio, cantidad: 1 })

        } else {

            this.cart[index].cantidad += 1;

        }

        /* ------------------ guarda el arreglo en la memoria local ----------------- */
        localStorage.setItem("carro", JSON.stringify(this.cart));

    }


    getProductos() {

        return this.cart;
    }

    getCount(){

        const count = this.cart.reduce( (cant, product) => {return cant + product.cantidad}, 0 );
        return count;
    }

    getSum(){
        
        return this.cart.reduce( (cant, product) => {return cant + (product.cantidad * product.precio)}, 0 );
        
    }
}