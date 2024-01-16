//Script para el carrito de compras 

    document.addEventListener('DOMContentLoaded', function () {
        const productos = [
            { id: 1, nombre: 'Salsa de Tomate', precio: 2.5 },
            { id: 2, nombre: 'Mayonesa', precio: 3 },
            { id: 3, nombre: 'Arvejas', precio: 1.5 },
            { id: 4, nombre: 'Aceite', precio: 5 },

        ];

        const listaCarrito = document.getElementById('lista-carrito');
        const totalCarrito = document.getElementById('total-carrito');
        let carrito = [];

        function agregarAlCarrito(producto) {
            carrito.push(producto);
            mostrarCarrito();
        }

        function mostrarCarrito() {
            listaCarrito.innerHTML = '';
            let total = 0;

            carrito.forEach(producto => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
                listaCarrito.appendChild(listItem);
                total += producto.precio;
            });

            totalCarrito.textContent = `$${total.toFixed(2)}`;
        }

        // Agrega eventos de clic para los botones "Agregar al Carrito"
        const botonesAgregar = document.querySelectorAll('.colorBtn');
        botonesAgregar.forEach((boton, index) => {
            boton.addEventListener('click', () => {
                agregarAlCarrito(productos[index]);
            });
        });
    });

