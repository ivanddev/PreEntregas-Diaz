// ADD-DELETE.JS
// CARGAR PRODUCTOS
let nombrePNG = document.getElementById('nombrePNG') //Éste es el total de productos cargados en la página ya sea mediange img y/o url  //Cada producto coincide con su ID y su indice en el Array Productos
nombrePNG.innerText = `${totalProductosCargados}`
let btnAgregarProducto = document.getElementById('btnAgregarProducto')
btnAgregarProducto.addEventListener('click', ()=>{nuevoProducto(productos)})
function resetearInputs(input){
    input.value = ''
}
function nuevoProducto(array) {
    let marcaIngresada = document.getElementById('marcaIngresada')
    let modeloIngresado = document.getElementById('modeloIngresado')
    let generoIngresado = document.getElementById('generoIngresado')
    let urlIngresado = document.getElementById('urlIngresada')
    let precioIngresado = document.getElementById('precioIngresado')
    let productoCreado = new Producto(productos.length, marcaIngresada.value, modeloIngresado.value, parseInt(precioIngresado.value), generoIngresado.value, urlIngresado.value)
    array.push(productoCreado)
    localStorage.setItem('productos', JSON.stringify(array))
    console.log(array)
    resetearInputs(marcaIngresada)
    resetearInputs(modeloIngresado)
    resetearInputs(generoIngresado)
    resetearInputs(precioIngresado)
}
console.log(productos.length)
