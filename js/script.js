preguntaPrincipal()
function preguntaPrincipal(){
    let banderaPregunta = true
    while(banderaPregunta){
         let pregunta = prompt(`Bienvenido!
         ¿Desea comprar nuestros productos?`).toLowerCase()
         if(pregunta == "si"){
            banderaPregunta = false
            mostrarLista()
         }else if(pregunta == "no"){
            banderaPregunta = false
            alert("Gracias por usar nuestra página.")
         }else{
            alert("Porfavor responde si/no")
         }

     }
}

function mostrarLista(){
    let banderaLista = true
    let carrito = 0
    let cantidadProductos = ""
    while(banderaLista){
        let lista = parseInt(prompt(`¿Que producto desea comprar?
        1. Producto uno. $250
        2. Producto dos. $300
        3. Producto tres. $500
        4. Producto cuatro. $700
        0. No deseo comprar otro producto.`))
        if(lista == 1){
            alert("Producto uno agregado al carrito")
            cantidadProductos += `Producto uno
            `
            carrito += 250
        }else if(lista == 2){
            alert("Producto dos agregado al carrito")
            cantidadProductos += `Producto dos
            `
            carrito += 300
        }
        else if(lista == 3){
            alert("Producto tres agregado al carrito")
            cantidadProductos += `Producto tres
            `
            carrito += 500
        }else if(lista == 4){
            alert("Producto cuatro agregado al carrito")
            cantidadProductos += `Producto cuatro
            `
            carrito += 700
        }else if(lista == 0){
            banderaLista = false
            if(carrito != 0){
                alert(`El total de su compra es de $${carrito}, llevando los siguientes productos:
                ${cantidadProductos} 
                Gracias por su visita!`)
            }else{
                alert(`Usted no deseó comprar nuestros productos.`)
            }
        }else{
            alert("Porfavor escriba bien la opción deseada")
        }
    }
}

