let cantidad = -1

while (cantidad<0 ||isNaN(cantidad)){
    cantidad = parseInt(prompt('Ingrese cantidad de motos a subir a la base de datos'))

}

let arrayDeMotos = [];
if(cantidad>0){
    for (let i=1; i<=cantidad; i++);
    let marca = ""
    while(marca.length<2){
    marca = prompt('Ingrese la marca de la moto '+i+' :')
}
    let modelo = "";
    while(modelo.length<2)
    modelo = prompt('Ingrese el modelo de '+marca+' :')

}