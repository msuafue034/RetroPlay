//Mensame de añadir al carrito [INDEX, TIENDA]
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {

            alert('Producto añadido al carrito 🔥🕹️ ¡Gracias!');
            

        });
    });
});

//Puntuación polularidad tienda (cambiar estrella de color) [TIENDA]
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function(e) {
            e.preventDefault();

            const selectedValue = parseInt(this.getAttribute('data-value'));

            stars.forEach(s => s.classList.remove('selected'));

            stars.forEach((s, index) => {
                if (index < selectedValue) {
                    s.classList.add('selected');
                }
            });
        });
    });
});


//Cambio de productos rango-precio [TIENDA]
function filtrarPorPrecio() {
    const rangoPrecio = document.getElementById('precio').value;
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const precio = parseInt(producto.getAttribute('data-precio'));

        if (precio <= rangoPrecio) {
            producto.style.display = 'block'; //Mostrar
        } else {
            producto.style.display = 'none'; //Ocultar
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const rangoPrecioInput = document.getElementById('precio');
    rangoPrecioInput.addEventListener('input', function() {
        document.getElementById('precio-valor').textContent = this.value;
        filtrarPorPrecio();
    });

    filtrarPorPrecio();
});
