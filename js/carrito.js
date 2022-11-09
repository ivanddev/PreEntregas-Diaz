// CARRITO.JS
let carrito = []
let totalCarrito = 0
let descuentoComprasOnline = 0.10
let totalConDescuento = 0
let totalConDescuentoSpan = document.getElementById('totalCarritoConDescuento')
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
function resetCarrito() {
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
        <td>
           <select name="" id="selectCantidad${productoCarrito.id}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
           </select>
          </td>
        <td>$${productoCarrito.precio}</td>
        <td><i id="deleteBtn${productoCarrito.id}" class="large material-icons">clear</i></td>
    </tr>
    `
    // Sumar en el DOM el producto
    totalCarrito += productoCarrito.precio
    totalCarritoSpan.innerText = `$${totalCarrito.toFixed(2)} (-10%)`

    totalConDescuento += productoCarrito.precio
  })
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD

  array.forEach((productoCarrito, indice) => {
    let cantidadSeleccionada = document.getElementById(`selectCantidad${productoCarrito.id}`)
    cantidadSeleccionada.addEventListener('change', calculoCantidad)
    function calculoCantidad(){
      precioCambiadoCantidad = productoCarrito.precio * cantidadSeleccionada.value
      console.log(`precio original :${productoCarrito.precio} de ${productoCarrito.marca} ${productoCarrito.modelo}`) //precio original
      console.log(`precio depende la cantidad: ${precioCambiadoCantidad} de ${productoCarrito.marca} ${productoCarrito.modelo}`) //precio depende la cantidad
    }
  })
  
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD
  // ESPACIO PARA SELECT CANTIDAD


  // Delete button
  array.forEach((productoCarrito, indice) => {
    document.getElementById(`deleteBtn${productoCarrito.id}`).addEventListener('click', () => {
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
  // Calcular precio final con el descuento compra online
  totalConDescuento *= descuentoComprasOnline
  totalConDescuento = totalCarrito - totalConDescuento
  totalConDescuentoSpan.innerText = totalConDescuento.toFixed(2)
}