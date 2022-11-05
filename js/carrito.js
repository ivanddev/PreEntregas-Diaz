// CARRITO.JS
let carrito = []
let totalCarrito = 0.00
let totalCarritoSpan = document.getElementById('totalCarrito')
let tableBody = document.getElementById('tableBody')
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


// Actualizar carrito
function actualizarCarrito() {
  window.location.reload()
}
// Resetear carrito (para un botón a futuro)
function resetCarrito(){
  localStorage.removeItem('carrito')
  window.location.reload()
}


// Imprimir en carrito
mostrarEnCarrito(carrito)
function mostrarEnCarrito(array) {
  // Mostrar
  array.forEach((productoCarrito) => {
    tableBody.innerHTML += `
    <tr id="tr${productoCarrito.id}">
    <td>${productoCarrito.marca} ${productoCarrito.modelo}</td>
    <td>2</td>
    <td>$${productoCarrito.precio}</td>
    <td><i id="deleteBtn${productoCarrito.id}" class="large material-icons">clear</i></td>
    </tr>
    `
    // Sumar en el DOM el producto
    totalCarrito += productoCarrito.precio
    totalCarritoSpan.innerText = totalCarrito
  }
  
  )
  // Delete button
  array.forEach((productoCarrito, indice) => {
    document.getElementById(`deleteBtn${productoCarrito.id}`).addEventListener('click',()=>{
      console.log(`eliminaste ${productoCarrito.marca} ${productoCarrito.modelo}`)

      // Eliminar del DOM
      let trProducto = document.getElementById(`tr${productoCarrito.id}`)
      trProducto.remove()
      // Restar del DOM el producto
      totalCarrito -= productoCarrito.precio
      totalCarritoSpan.innerText = totalCarrito


      // Eliminar del Array Carrito
      array.splice(indice, 1)
      console.log(array)

      // Eliminar del Storage
      localStorage.setItem('carrito', JSON.stringify(array))

      window.location.reload()
    })
  })
}
console.log(carrito)


console.log(totalCarrito)
