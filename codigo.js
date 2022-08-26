
let lista=document.getElementById("contenedor-pagina");
let carrito = [];
if(localStorage.getItem("carritoCompras")!= null){
    carrito=JSON.parse(localStorage.getItem("carritoCompras"));
}

crearProductos();

function crearProductos(){
    for(const producto of productos) {
        lista.innerHTML +=`<div class="contenedor-productos">
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
            <button class="delete" scope="row">X</button>
        </tr> 
    `;

localStorage.setItem("carroCompras",JSON.stringify(carrito));
}