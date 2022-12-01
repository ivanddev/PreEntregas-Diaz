// ADD-DELETE.JS
// CARGAR PRODUCTOS
let nombrePNG = document.getElementById('nombrePNG') //Éste es el total de productos cargados en la página ya sea mediange img y/o url  //Cada producto coincide con su ID y su indice en el Array Productos
nombrePNG.innerText = `${totalProductosCargados}`
let btnAgregarProducto = document.getElementById('btnAgregarProducto')
btnAgregarProducto.addEventListener('click', confirmacion)

function resetearInputs(input) {
    input.value = ''
}

// Inputs
let marcaIngresada = document.getElementById('marcaIngresada')
let modeloIngresado = document.getElementById('modeloIngresado')
let generoIngresado = document.getElementById('generoIngresado')
let urlIngresado = document.getElementById('urlIngresada')
let precioIngresado = document.getElementById('precioIngresado')

function confirmacion() {
    if (marcaIngresada.value != '' && modeloIngresado.value != '' && precioIngresado.value && urlIngresado.value != '') {
        Swal.fire({
            title: '¿Estás seguro que deseas subir este producto?',
            text: `
         ${marcaIngresada.value} ${modeloIngresado.value} |
         Género: ${generoIngresado.value} |
         Precio: $${precioIngresado.value}
         `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                nuevoProducto(productos)
                Swal.fire(
                    'Producto subido!',
                    'El producto ha sido subido a la web con éxito.',
                    'success'
                )
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifica completar todos los campos correctamente!',
            timer: 3000,
            showConfirmButton: false
          })
    }
}

function nuevoProducto(array) {
    let productoCreado = new Producto(productos.length, marcaIngresada.value, modeloIngresado.value, parseInt(precioIngresado.value), generoIngresado.value, 1, urlIngresado.value)
    array.push(productoCreado)
    localStorage.setItem('productos', JSON.stringify(array))
    console.log(array)
    resetearInputs(marcaIngresada)
    resetearInputs(modeloIngresado)
    resetearInputs(urlIngresado)
    resetearInputs(precioIngresado)
}
console.log(productos.length)