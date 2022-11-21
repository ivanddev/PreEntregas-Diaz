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
function addToCart(producto) {
  const existe = carrito.some (prod => prod.id == producto.id)
  if (existe){
    const prod = carrito.map(prod => {
      if(prod.id == producto.id){
        prod.cantidad++
      }
    })
  }else{
    console.log(producto)
    carrito.push(producto)
    console.log(carrito)
  }
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
    let precioDelProducto
    tableBody.innerHTML += `
    <tr id="tr${productoCarrito.id}">
        <td>${productoCarrito.marca} ${productoCarrito.modelo}</td>
        <td>
           <p>${productoCarrito.cantidad}</p>
          </td>
        <td>$${precioDelProducto = productoCarrito.precio*productoCarrito.cantidad}</span></td>
        <td><i id="deleteBtn${productoCarrito.id}" class="large material-icons">clear</i></td>
    </tr>
    `

    // Sumar en el DOM el producto
    totalCarrito += precioDelProducto
    totalCarritoSpan.innerText = `$${totalCarrito.toFixed(2)}`

    totalConDescuento += precioDelProducto
  })


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