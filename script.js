document.addEventListener("DOMContentLoaded", () => {
    // Lista inicial de productos
    const productos = [
        {
            nombre: "control",
            precio: "300.000 COP",
            url: "https://i.pinimg.com/originals/3c/41/72/3c4172c4a6ba0a4b8aef662f8197e059.png"
        },
        {
            nombre: "teclado",
            precio: "120.000 COP",
            url: "https://w7.pngwing.com/pngs/1022/458/png-transparent-computer-keyboard-thermaltake-gamer-esports-switch-poseidon-gaming-keyboard-mechanical-blue-electronics-computer-keyboard-thumbnail.png"
        },
        {
            nombre: "pantalla",
            precio: "400.000 COP",
            url: "https://w7.pngwing.com/pngs/639/158/png-transparent-rog-swift-4k-hdr-gaming-monitor-pg27uq-computer-monitors-nvidia-g-sync-refresh-rate-4k-resolution-monitors-miscellaneous-television-electronics-thumbnail.png"
        },
        {
            nombre: "cerveza",
            precio: "8.000 COP",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn2h9EsMtr8bAOOveFTM-9Wrq26pGSCrghg&s"
        },
        {
            nombre: "lapiz",
            precio: "1.000 COP",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLfUpMD0qKzlsR5E1VsKxfSvOp1xvjaMMgg&s"
        }
    ];

    const form = document.getElementById("form-agregar-producto");
    const listaProductos = document.getElementById("productos-lista");
    const limpiarBtn = document.getElementById("limpiar");

    // Renderizar productos iniciales
    renderListaProductos();

    // Manejar el envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const precio = parseFloat(document.getElementById("precio").value.trim());
        const imagen = document.getElementById("imagen").value.trim();

        // Validar campos
        if (!nombre || isNaN(precio) || precio <= 0 || !imagen) {
            alert("Por favor, llena todos los campos correctamente.");
            return;
        }

        // Crear producto y agregarlo a la lista
        const producto = {
            nombre,
            precio: `${precio.toFixed(2)} COP`,
            url: imagen
        };
        productos.push(producto);

        // Renderizar el nuevo producto en la lista
        renderListaProductos();

        // Limpiar formulario
        form.reset();
    });

    // Manejar el botón de limpiar
    limpiarBtn.addEventListener("click", () => {
        form.reset();
    });

    // Función para renderizar la lista de productos
    function renderListaProductos() {
        // Limpiar la lista actual
        listaProductos.innerHTML = "";

        // Renderizar cada producto de la lista
        productos.forEach((producto, index) => {
            const div = document.createElement("div");
            div.classList.add("producto");

            div.innerHTML = `
                <img src="${producto.url}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            `;

            // Agregar funcionalidad al botón de eliminar
            div.querySelector(".eliminar").addEventListener("click", (e) => {
                const index = parseInt(e.target.getAttribute("data-index"), 10);
                eliminarProducto(index);
            });

            listaProductos.appendChild(div);
        });
    }

    // Función para eliminar un producto
    function eliminarProducto(index) {
        productos.splice(index, 1);
        renderListaProductos();
    }
});
