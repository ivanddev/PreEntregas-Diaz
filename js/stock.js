// STOCK.JS

// IVA 10%
let IVA_GENERAL = 1.10

// CONSTRUCTOR PRODUCTOS
class Producto {
  constructor(id, marca, modelo, precio, genero) {
    this.id = id,
      this.marca = marca,
      this.modelo = modelo,
      this.precio = precio,
      this.genero = genero
  }
  // PRODUCTOS+IVA
  precioConIva() {
    this.precio = this.precio * IVA_GENERAL;
  }
}

// STOCK
// STOCK
// STOCK
const productos = []
productos.push(new Producto(0, "Apple Watch", "Serie 7 GPS Starlight", 205.20, "unisex"))
productos.push(new Producto(1, "Apple Watch", "Serie 7 GPS Midnight", 200.20, "unisex"))
productos.push(new Producto(2, "Apple Watch", "SE Nike GPS", 160.20, "unisex"))
productos.push(new Producto(3, "SmartWatch Samsung Galaxy", "Watch 5", 97.195, "unisex"))
productos.push(new Producto(4, "SmartWatch Samsung Galaxy", "Watch 4", 97.195, "unisex"))
productos.push(new Producto(5, "SmartWatch Samsung Galaxy", "Fit2", 14.395, "unisex"))
productos.push(new Producto(6, "SmartWatch Xiaomi", "S1 GL Black", 95.395, "unisex"))
productos.push(new Producto(7, "SmartWatch Xiaomi", "S1 Active", 72.995, "unisex"))
productos.push(new Producto(8, "SmartWatch Xiaomi", "S1 GL", 95.395, "unisex"))
productos.push(new Producto(9, "Apple Watch", "SE Nike GPS Space Gray", 135,20, "unisex"))
productos.push(new Producto(10, "SmartWatch Xiaomi", "Mi Band 6GL", 14300.23 , "unisex"))
// STOCK
// STOCK
// STOCK

let totalProductosCargados = productos.length

// APLICAR IVA
productos.forEach(element => element.precioConIva())

// FUNCION IMPRIMIR CARDS
function imprimirCards(param1){
  for (let productosStock of param1) {
    let nuevoProducto = document.createElement("article")
    nuevoProducto.innerHTML += `
    <div class="cardStock">
        <figure>
          <img src="../multimedia/images/stock/${productosStock.id}.png" alt="${productosStock.marca} ${productosStock.modelo}">
        </figure>
        <section class="details">
          <div class="min-details">
            <h1>${productosStock.modelo} <span>${productosStock.marca}</span></h1>
            <h1 class="price">$${productosStock.precio.toFixed(2)}</h1>
          </div>
          <a href="#" id="btnCard" class="btn">add to cart</a>
        </section>
      </div>
    `
    stock.appendChild(nuevoProducto)
  }
}

// INNERHTML CARD POR DEFECTO - MOSTRAR TODAS LAS CARDS
let stock = document.getElementById('stock')
imprimirCards(productos)
