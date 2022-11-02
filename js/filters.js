// FILTERS.JS
function resetearStockMostrado() {
    stock.innerHTML = ``
}

// Input search
let inputSearch = document.getElementById('inputSearch')
let lupa = document.getElementById('lupa')
// Mostrar Lupa
inputSearch.addEventListener('keypress', mostrarLupa)
function mostrarLupa(){
  lupa.className += 'd-flex'
}
// Buscador tipeado + include
inputSearch.addEventListener('input', Tipeo)
function Tipeo(){
    let tipeoFilter = productos.filter((tipeo) => tipeo.marca.toLowerCase().includes(inputSearch.value.toLowerCase()) | tipeo.modelo.toLowerCase().includes(inputSearch.value.toLowerCase()))
    console.log(inputSearch.value)
    console.log(tipeoFilter)
    // desarrollar para poder mostrarlos como texto y no objetos
    // desarrollar para poder mostrarlos como texto y no objetos
    // desarrollar para poder mostrarlos como texto y no objetos
}

// Marca
let apple = document.getElementById('apple')
let xiaomi = document.getElementById('xiaomi')
let samsung = document.getElementById('samsung')
apple.addEventListener('click', showApple)
xiaomi.addEventListener('click', showXiaomi)
samsung.addEventListener('click', showSamsung)

function noHayStock(marca){
    resetearStockMostrado()
    let nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML = `No tenemos productos disponibles de la marca ${marca}`
    stock.appendChild(nuevoDiv)

}

function showApple() {
    let appleFilter = productos.filter((apple) => apple.marca.toLowerCase().includes('apple'))
    if (appleFilter.length >= 1) {
        resetearStockMostrado()
        imprimirCards(appleFilter)
    } else {
        noHayStock('Apple')
        return
    }

}
function showXiaomi() {
    let xiaomiFilter = productos.filter((xiaomi) => xiaomi.marca.toLowerCase().includes('xiaomi'))
    if (xiaomiFilter.length >= 1) {
        resetearStockMostrado()
        imprimirCards(xiaomiFilter)
    } else {
        noHayStock('Xiaomi')
        return
    }

}
function showSamsung() {
    let samsungFilter = productos.filter((samsung) => samsung.marca.toLowerCase().includes('samsung'))
    if (samsungFilter.length >= 1) {
        resetearStockMostrado()
        imprimirCards(samsungFilter)
    } else {
        noHayStock('Samsung')
        return
    }

}
