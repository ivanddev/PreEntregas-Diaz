// ADD-DELETE.JS
// CARGAR PRODUCTOS
let nombrePNG = document.getElementById('nombrePNG')
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
    let precioIngresado = document.getElementById('precioIngresado')
    let productoCreado = new Producto(productos.length, marcaIngresada.value, modeloIngresado.value, parseInt(precioIngresado.value), generoIngresado.value)
    array.push(productoCreado)
    localStorage.setItem('productos', JSON.stringify(array))
    console.log(array)
    resetearInputs(marcaIngresada)
    resetearInputs(modeloIngresado)
    resetearInputs(generoIngresado)
    resetearInputs(precioIngresado)
}
console.log(productos.length)