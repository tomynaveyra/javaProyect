
//for(intentos=1;intentos<=3;intentos++){
//    let contrasenia=prompt("Ingrese la Contraseña");
//    if(contrasenia==1234){
//        console.log("Bienvenido a Tienda Ritual");
//        break;
//    }else{
//        console.log("La contraseña es Incorrecta")
//    }
//}
//let total = 0;
//let producto1 = 500;
//let producto2 = 600;

//function comprar(producto1,porducto2){
//    total = producto1 + producto2
//    console.log("la suma de $ "+producto1+" + $"+porducto2+" es igual $"+ total);
    
//}
//comprar(producto1,producto2);

//function comprarEfectivo(producto1){
//    totalEfectivo= producto1*0.8;
//    console.log("El producto1 en efectivo sale $"+totalEfectivo);
//}
//comprarEfectivo(producto1);



//Array de proyecto

class producto {
    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
    agregarStock(){
        let error = "producto disponible"
        if(this.disponibilidad == false){
            this.disponibilidad = true
        }else{
            console.log(error)
        }
    }
    retirarStock(){
        let error = "producto no disponible"
        if(this.disponibilidad == true){
            this.disponibilidad = false
        }else{
            console.log(error)
        }
    }
}

let producto1 = new producto("energetica","vela",120,true)
let porducto2 = new producto("purificadora","vela",150,true)
let producto3 = new producto("cuarzo","piedra",200,false)
let producto4 = new producto("opalo","piedra",220,true)
let producto5 = new producto("salvia","hierba",90,true)
let producto6 = new producto("lavanda","hierba",120,true)

const tienda = []
tienda.push(producto1,porducto2,producto3,producto4,producto5,producto6)

let piedras = tienda.filter(producto=>producto.categoria == "piedra")
console.table(piedras)

let disponible = tienda.filter(producto=>producto.disponibilidad == true)
console.table(disponible)

let encuentra = tienda.find(producto=>producto.nombre == "cuarzo")
console.table(encuentra)

let productoIva = tienda.map(producto=>{
    return {
        nombre: producto.nombre,
        categoria: producto.categoria,
        precio: producto.precio * 1.21,
        disponibilidad: producto.disponibilidad

    }
})

console.table(productoIva)