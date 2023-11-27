var carrito = {};
var selectedTalla = '';

function seleccionarTalla(talla) {
    selectedTalla = talla;
}

function vaciarCarrito() {
    carrito = {};
    actualizarCarrito();
    document.getElementById('total').textContent = '0.00';
}

function agregarAlCarrito(nombre, precio, talla) {
    if (!talla) {
        alert('Selecciona una talla antes de agregar al carrito.');
        return;
    } else {
        if (carrito[nombre]) {
            carrito[nombre].cantidad += 1;
        } else {
            var productoKey = nombre + ' - Talla ' + talla;
            if (carrito[productoKey]) {
                carrito[productoKey].cantidad += 1;
            } else {
                carrito[productoKey] = { precio: precio, cantidad: 1, talla: talla };

                var carritoLista = document.getElementById('carrito-lista');
                var nuevoProducto = document.createElement('div');
                nuevoProducto.className = 'producto';
                nuevoProducto.innerHTML = '<p>' + nombre + ' - Talla ' + talla + ' - $' + precio.toFixed(2) + ' x' + carrito[productoKey].cantidad;

                carritoLista.appendChild(nuevoProducto);
            }
        }
        
        actualizarCarrito();

        var total = 0;
        for (var producto in carrito) {
            var item = carrito[producto];
            total += item.precio * item.cantidad;
        }
        document.getElementById('total').textContent = total.toFixed(2);
    }
}


function eliminarDelCarrito(nombre) {
    // Resta la cantidad del producto o elimínalo si es el último
    if (carrito[nombre].cantidad > 1) {
        carrito[nombre].cantidad -= 1;
    } else {
        delete carrito[nombre];
    }

    actualizarCarrito()

    // Recalcula y actualiza el total
    var total = 0;
    for (var producto in carrito) {
        var item = carrito[producto];
        total += item.precio * item.cantidad;
    }
    document.getElementById('total').textContent = total.toFixed(2);

    // Puedes agregar aquí cualquier otra lógica que necesites
    // ...
}

function actualizarCarrito() {
    var carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';

    for (var producto in carrito) {
        var item = carrito[producto];
        var cont_nuevoProducto = document.createElement('div');
        var cont_btns = document.createElement('div');
        var nuevoProducto = document.createElement('div');
        var btn_add_cart = document.createElement('button');
        var btn_remove_cart = document.createElement('button');

        cont_btns.className = 'cont-btn-carrito';
        cont_nuevoProducto.className = 'cont-item-carrito';

        btn_add_cart.className = 'btn-modificar-cart';
        btn_add_cart.textContent = 'AGREGAR';
        btn_add_cart.onclick = (function (producto, item) {
            return function () {
                agregarAlCarrito(producto, item.precio, item.talla);
            };
        })(producto, item);

        btn_remove_cart.className = 'btn-modificar-cart';
        btn_remove_cart.textContent = 'QUITAR';
        btn_remove_cart.onclick = (function (producto) {
            return function () {
                eliminarDelCarrito(producto);
            };
        })(producto);

        nuevoProducto.className = 'producto';
        nuevoProducto.textContent = producto + ' - $' + item.precio.toFixed(2) + ' x' + item.cantidad;

        cont_btns.appendChild(btn_add_cart);
        cont_btns.appendChild(btn_remove_cart);
        cont_nuevoProducto.appendChild(nuevoProducto);
        cont_nuevoProducto.appendChild(cont_btns);
        carritoLista.appendChild(cont_nuevoProducto);
    }
}


function cerrarCarrito() {
    var carritoDiv = document.getElementById('carrito');
    carritoDiv.style.left = '-100%';
}

function toggleCarrito() {
    var carritoDiv = document.getElementById('carrito');
    var carritoLeft = carritoDiv.style.left;

    if (carritoLeft === '0px' || carritoLeft === '') {
        carritoDiv.style.left = '-100%';
    } else {
        carritoDiv.style.left = '0px';
    }
}

window.onload = function () {
    cerrarCarrito();
};
