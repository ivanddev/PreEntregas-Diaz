// STOCK.JS

// IVA 10%
let IVA_GENERAL = 1.17

// CONSTRUCTOR PRODUCTOS
class Producto {
  constructor(id, marca, modelo, precio, genero, cantidad, url) {
    this.id = id,
      this.marca = marca,
      this.modelo = modelo,
      this.precio = precio,
      this.genero = genero,
      this.cantidad = cantidad
      this.url = url
  }
  // PRODUCTOS+IVA
  precioConIva() {
    this.precio = this.precio * IVA_GENERAL;
    this.precio = Number(this.precio).toFixed(2)
    this.precio = parseFloat(this.precio)
  }
}


let productos = []
if (localStorage.getItem('productos')) {
  productos = JSON.parse(localStorage.getItem('productos'))
} else {
  // STOCK
  // STOCK
  // STOCK
  // STOCK
  productos.push(new Producto(0, "Apple Watch", "Serie 7 GPS Starlight", 205.20, "unisex",1))
  productos.push(new Producto(1, "Apple Watch", "Serie 7 GPS Midnight", 200.20, "unisex",1))
  productos.push(new Producto(2, "Apple Watch", "SE Nike GPS", 160.20, "unisex",1))
  productos.push(new Producto(3, "SmartWatch Samsung Galaxy", "Watch 5", 97.195, "unisex",1))
  productos.push(new Producto(4, "SmartWatch Samsung Galaxy", "Watch 4", 97.195, "unisex",1))
  productos.push(new Producto(5, "SmartWatch Samsung Galaxy", "Fit2", 14.395, "unisex",1))
  productos.push(new Producto(6, "SmartWatch Xiaomi", "S1 GL Black", 95.395, "unisex",1))
  productos.push(new Producto(7, "SmartWatch Xiaomi", "S1 Active", 72.995, "unisex",1))
  productos.push(new Producto(8, "SmartWatch Xiaomi", "S1 GL", 95.395, "unisex",1))
  productos.push(new Producto(9, "Apple Watch", "SE Nike GPS Space Gray", 135.20, "unisex",1))
  productos.push(new Producto(10, "SmartWatch Xiaomi", "Mi Band 6GL", 14300.23, "unisex",1))
  // APLICAR IVA
  productos.forEach(element => element.precioConIva())

  localStorage.setItem('productos', JSON.stringify(productos))
}

let totalProductosCargados = productos.length

// FUNCION IMPRIMIR CARDS
function imprimirCards(param1) {
  for (let productosStock of param1) {
    let nuevoProducto = document.createElement("article")
    nuevoProducto.innerHTML += `
    <div class="cardStock">
        <figure>
          <img src="${productosStock.url !== undefined ? `${productosStock.url}` : `../multimedia/images/stock/${productosStock.id}.png`}" alt="${productosStock.marca} ${productosStock.modelo}">
        </figure>
        <section class="details">
          <div class="min-details">
            <h1>${productosStock.modelo} <span>${productosStock.marca}</span></h1>
            <h1 class="price">$${productosStock.precio}</h1>
          </div>
          <button href="#" id="btnCard${productosStock.id}" class="btn">add to cart</button>
        </section>
      </div>
    `
    stock.appendChild(nuevoProducto)
    let btnCard = document.getElementById(`btnCard${productosStock.id}`)
    btnCard.addEventListener('click', () => {
      addToCart(productosStock)
    })
  }
}

// INNERHTML CARD POR DEFECTO - MOSTRAR TODAS LAS CARDS
let stock = document.getElementById('stock')
imprimirCards(productos)
console.log(productos)