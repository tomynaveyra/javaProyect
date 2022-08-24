
let lista=document.getElementById("contenedor-pagina");
let carrito = [];
crearProductos();

function crearProductos(){
    for(const producto of productos) {
        lista.innerHTML+=`<div class="contenedor-productos">
        <h3>${producto.nombre}</h3>
        <img src=${producto.foto} alt="">
        <h4>$${producto.precio}</h4>
        <button class="boton-add"id="btn${producto.id}">Comprar</button>
    </div>`;
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener(`click`,function(){
            agregarAlCarrito(producto);
        })
    });
}
function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    document.getElementById("items").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        </tr> 
    `;
}