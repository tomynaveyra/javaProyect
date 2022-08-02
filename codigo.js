


for(intentos=1;intentos<=3;intentos++){
    let contrasenia=prompt("Ingrese la Contraseña");
    if(contrasenia==1234){
        console.log("Bienvenido a Tienda Ritual");
        break;
    }else{
        console.log("La contraseña es Incorrecta")
    }
}









let total = 0;
let producto1 = 500;
let producto2 = 600;

function comprar(producto1,porducto2){
    total = producto1 + producto2
    console.log("la suma de $ "+producto1+" + $"+porducto2+" es igual $"+ total);
    
}
comprar(producto1,producto2);

function comprarEfectivo(producto1){
    totalEfectivo= producto1*0.8;
    console.log("El producto1 en efectivo sale $"+totalEfectivo);
}
comprarEfectivo(producto1);




























//Array de objetos
const productos=[
    {
        nombre:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        nombre:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        nombre:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        nombre:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    }
];
