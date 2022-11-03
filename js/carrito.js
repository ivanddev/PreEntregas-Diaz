// CARRITO.JS
let carrito = []
let table = document.getElementById('table')
if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
  console.log('seteando el array carrito por primera vez')
  localStorage.setItem('carrito', JSON.stringify(carrito))
}
// Agregar al carrito
function addToCart(productoStock) {
  console.log(productoStock)
  carrito.push(productoStock)
  console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito))

}
// Imprimir en carrito
function mostrarEnCarrito(array) {
  array.forEach((productoCarrito)=>{
    table.innerHTML += `
    <tr>
    <td>${productoCarrito.marca} ${productoCarrito.modelo}</td>
    <td>2</td>
    <td>$${productoCarrito.precio}</td>
    <td><i class="large material-icons">clear</i></td>
    </tr>
    `
  })

}
mostrarEnCarrito(carrito)
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO
// ME QUEDÉ ACÁ MINUTO 35:00 -- ULTIMO HECHO = IMPRIMIR EN EL DOM EL CONTENIDO DE CARRITO