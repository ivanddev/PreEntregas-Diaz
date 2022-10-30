const IVA_GENERAL = 1.10

preguntaPrincipal()

function preguntaPrincipal() {
    let banderaPregunta = true
    while (banderaPregunta) {
        let pregunta = prompt(`Bienvenido!
         ¿Desea comprar nuestros productos?`).toLowerCase()
        if (pregunta == "si") {
            banderaPregunta = false
            mostrarLista()
        } else if (pregunta == "no") {
            banderaPregunta = false
            alert("Gracias por usar nuestra página.")
        } else {
            alert("Porfavor responde si/no")
        }

    }
}




function mostrarLista() {

    let carrito = 0
    // let productosCarrito = ""
    let productosCarrito = []

    // Objetos - método class constructor
    class Producto {
        constructor(id, marcaProducto, modeloProducto, precioProducto) {
            this.id = id,
                this.marcaProducto = marcaProducto,
                this.modeloProducto = modeloProducto,
                this.precioProducto = precioProducto
        }
        precioConIva() {
            this.precioProducto = this.precioProducto * IVA_GENERAL;
        }
    }

    const producto1 = new Producto(1, "Apple Watch", "Serie 7 GPS Starlight", 205.20)
    const producto2 = new Producto(2, "Apple Watch", "Serie 7 GPS Midnight", 200.20)
    const producto3 = new Producto(3, "Apple Watch", "Serie 7 Nike GPS", 202.29)
    const producto4 = new Producto(4, "Apple Watch", "Serie 7 GPS Nike Starlight", 210.20)
    const producto5 = new Producto(5, "SmartWatch Samsung Galaxy", "Watch 5", 97.195)
    const producto6 = new Producto(6, "SmartWatch Samsung Galaxy", "Watch 4", 97.195)
    const producto7 = new Producto(7, "SmartWatch Samsung Galaxy", "Fit2", 14.395)
    const producto8 = new Producto(8, "SmartWatch Xiaomi Watch", "S1 GL Black", 95.395)
    const producto9 = new Producto(9, "SmartWatch Xiaomi Watch", "S1 Active", 72.995)
    const producto10 = new Producto(10, "SmartWatch Xiaomi Watch", "S1 GL", 95.395)

    const productos = []
    productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10)

    let cantidadProductosExistentes = productos.length

    // aplicar iva
    productos.forEach(element => element.precioConIva())
    // aplicar iva

    let banderaMostrarLista = true
    while (banderaMostrarLista) {
        let listaMostrada = parseInt(prompt(
            `¿Que producto desea comprar?
              ${producto1.id}. ${producto1.marcaProducto} ${producto1.modeloProducto} $${producto1.precioProducto}
              ${producto2.id}. ${producto2.marcaProducto} ${producto2.modeloProducto} $${producto2.precioProducto}
              ${producto3.id}. ${producto3.marcaProducto} ${producto3.modeloProducto} $${producto3.precioProducto}
              ${producto4.id}. ${producto4.marcaProducto} ${producto4.modeloProducto} $${producto4.precioProducto}
              ${producto5.id}. ${producto5.marcaProducto} ${producto5.modeloProducto} $${producto5.precioProducto}
              ${producto6.id}. ${producto6.marcaProducto} ${producto6.modeloProducto} $${producto6.precioProducto}
              ${producto7.id}. ${producto7.marcaProducto} ${producto7.modeloProducto} $${producto7.precioProducto}
              ${producto8.id}. ${producto8.marcaProducto} ${producto8.modeloProducto} $${producto8.precioProducto}
              ${producto9.id}. ${producto9.marcaProducto} ${producto9.modeloProducto} $${producto9.precioProducto}
              ${producto9.id}. ${producto9.marcaProducto} ${producto9.modeloProducto} $${producto9.precioProducto}
              ${producto10.id}. ${producto10.marcaProducto} ${producto10.modeloProducto} $${producto10.precioProducto}
              11. Buscar producto
              0. Finalizar compra/Salir
          `))

        switch (listaMostrada) {
            case producto1.id:
                alert(`${producto1.marcaProducto} ${producto1.modeloProducto} Agregado al carrito`)
                carrito += producto1.precioProducto
                productosCarrito.push(`${producto1.marcaProducto} ${producto1.modeloProducto} $${producto1.precioProducto}`)
                break;
            case producto2.id:
                alert(`${producto2.marcaProducto} ${producto2.modeloProducto} Agregado al carrito`)
                carrito += producto2.precioProducto
                productosCarrito.push(`${producto2.marcaProducto} ${producto2.modeloProducto} $${producto2.precioProducto}`)
                break;
            case producto3.id:
                alert(`${producto3.marcaProducto} ${producto3.modeloProducto} Agregado al carrito`)
                carrito += producto3.precioProducto
                productosCarrito.push(`${producto3.marcaProducto} ${producto3.modeloProducto} $${producto3.precioProducto}`)
                break;
            case producto4.id:
                alert(`${producto4.marcaProducto} ${producto4.modeloProducto} Agregado al carrito`)
                carrito += producto4.precioProducto
                productosCarrito.push(`${producto4.marcaProducto} ${producto4.modeloProducto} $${producto4.precioProducto}`)
                break;
            case producto5.id:
                alert(`${producto5.marcaProducto} ${producto5.modeloProducto} Agregado al carrito`)
                carrito += producto5.precioProducto
                productosCarrito.push(`${producto5.marcaProducto} ${producto5.modeloProducto} $${producto5.precioProducto}`)
                break;
            case producto6.id:
                alert(`${producto6.marcaProducto} ${producto6.modeloProducto} Agregado al carrito`)
                carrito += producto6.precioProducto
                productosCarrito.push(`${producto6.marcaProducto} ${producto6.modeloProducto} $${producto6.precioProducto}`)
                break;
            case producto7.id:
                alert(`${producto7.marcaProducto} ${producto7.modeloProducto} Agregado al carrito`)
                carrito += producto7.precioProducto
                productosCarrito.push(`${producto7.marcaProducto} ${producto7.modeloProducto} $${producto7.precioProducto}`)
                break;
            case producto8.id:
                alert(`${producto8.marcaProducto} ${producto8.modeloProducto} Agregado al carrito`)
                carrito += producto8.precioProducto
                productosCarrito.push(`${producto8.marcaProducto} ${producto8.modeloProducto} $${producto8.precioProducto}`)
                break;
            case producto9.id:
                alert(`${producto9.marcaProducto} ${producto9.modeloProducto} Agregado al carrito`)
                carrito += producto9.precioProducto
                productosCarrito.push(`${producto9.marcaProducto} ${producto9.modeloProducto} $${producto9.precioProducto}`)
                break;
            case producto10.id:
                alert(`${producto10.marcaProducto} ${producto10.modeloProducto} Agregado al carrito`)
                carrito += producto10.precioProducto
                productosCarrito.push(`${producto10.marcaProducto} ${producto10.modeloProducto} $${producto10.precioProducto}`)
                break;
            case 11:
                buscarProducto()
                banderaMostrarLista = false
                break;
            case 0:
                banderaMostrarLista = false
                if (carrito != 0) {
                    let cantidadProductosCarrito = productosCarrito.length
                    alert(
                        `Total de su compra: $${carrito.toFixed(2)} (IVA Incluido)
                        Cantidad de productos: ${cantidadProductosCarrito}
                        Productos:
                         ${productosCarrito}
                         `)
                } else {
                    alert(`Gracias por usar nuestra página`)
                }
                break;
            default:
                alert("Respuesta no válida, porfavor escriba correctamente la opción deseada.")
                break;
        }
    }

    function buscarProducto() {
        let busquedaProducto = prompt(`Ingrese marca del producto que desea buscar`).toLowerCase()
        let resultadoApple = productos.filter((el) => el.marcaProducto.includes(`Apple`))
        let resultadoXiaomi = productos.filter((el) => el.marcaProducto.includes(`Xiaomi`))
        let resultadoSamsung = productos.filter((el) => el.marcaProducto.includes(`Samsung`))

        // PRODUCTOS ENCONTRADOS APPLE
        // PRODUCTOS ENCONTRADOS APPLE
        // PRODUCTOS ENCONTRADOS APPLE
        if (busquedaProducto == "apple" | busquedaProducto == "apple watch") {
            let productosEncontradosApple = []
            // Ciclo for para pushear en un array hasta el ultimo elemento encontrado (apple)
            for (let i = 0; i < resultadoApple.length; i++) {
                productosEncontradosApple.push(`
                ${resultadoApple[i].id}. ${resultadoApple[i].marcaProducto} ${resultadoApple[i].modeloProducto} $${resultadoApple[i].precioProducto}
                `)
            }
            let listaApple = prompt(`
            Ingrese el producto Apple deseado:
            ${productosEncontradosApple}
            `)

            // SWITCH CASE listaApple
            // SWITCH CASE listaApple
            // SWITCH CASE listaApple
            // // // // // // // for (let i = 0; i < resultadoApple.length; i++) {
            // // // // // // //     switch (listaApple) {
            // // // // // // //         case i:
            // // // // // // //             alert(`${resultadoApple[i].marcaProducto} ${resultadoApple[i].modeloProducto} Agregado al carrito`)
            // // // // // // //             break;
            // // // // // // //     }
            // // // // // // // }

            // PRODUCTOS ENCONTRADOS XIAOMI
            // PRODUCTOS ENCONTRADOS XIAOMI
            // PRODUCTOS ENCONTRADOS XIAOMI
        } else if (busquedaProducto == "xiaomi" | busquedaProducto == "xiaomi watch") {
            console.log(resultadoXiaomi)

            // PRODUCTOS ENCONTRADOS SAMSUNG
            // PRODUCTOS ENCONTRADOS SAMSUNG
            // PRODUCTOS ENCONTRADOS SAMSUNG
        } else if (busquedaProducto == "samsung" | busquedaProducto == "samsung galaxy") {
            console.log(resultadoSamsung)
        } else {
            console.log("No contamos con productos de esa marca")
        }
    }
}