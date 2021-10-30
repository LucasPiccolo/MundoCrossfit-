// shop

"use strict";

document.querySelector("#btn-comprar").addEventListener("click",comprar1);
document.querySelector("#btn-comprar3").addEventListener("click",comprar3);
document.querySelector("#btn-borrar").addEventListener("click",borrar);
document.querySelector("#btn-vaciar").addEventListener("click",vaciar);

const producto= document.querySelector("#producto");
const cantidad= document.querySelector("#cantidad");
const color= document.querySelector("#color");

let compra = [{
    "producto": "Barra Olimpica M",
    "cantidad": "1",
    "color": "negra"
}];

mostrarListado();

let compras = {
    "producto": producto,
    "cantidad": cantidad,
    "color": color
};

//comprar 1 item
function comprar1() {

    let compras = {
        "producto": producto.value,
        "cantidad": cantidad.value,
        "color": color.value
    };

    compra.push(compras);

    mostrarListado();
    limpiarInput();
}

function comprar3() {
    
    let compras = {
        "producto": producto.value,
        "cantidad": cantidad.value,
        "color": color.value
    };
    
        compra.push(compras);
        compra.push(compras);
        compra.push(compras);
        
        mostrarListado();
        limpiarInput();
    }
    

//borrar ultimo item
function borrar() {
    compra.pop(compras);
    mostrarListado();
}


//vacia la lista
function vaciar() {
    compra=[];
	mostrarListado();
}

//mostrar lista
function mostrarListado() {

    let tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';

    for (const item of compra) {
        const filas = document.createElement('tr');

        if (Number(item.cantidad) > 5 && item.producto=="Barra Olimpica") {
           
            filas.classList.add("descuento");
        }

        const columna_producto = document.createElement('td');
        const columna_cantidad = document.createElement('td');
        const columna_color = document.createElement('td');

        columna_producto.innerHTML = item.producto;
        columna_cantidad.innerHTML = item.cantidad;
        columna_color.innerHTML = item.color;

        filas.appendChild(columna_producto);
        filas.appendChild(columna_cantidad);
        filas.appendChild(columna_color);

        tbody.appendChild(filas);
    }
}


//limpiar inputs
function limpiarInput() {
    producto.value = '';
    cantidad.value = '';
    color.value = '';
}

//shop