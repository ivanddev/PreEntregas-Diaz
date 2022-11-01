// FILTERS.JS
function resetearStockMostrado() {
    stock.innerHTML = ``
}
// Marca
let apple = document.getElementById('apple')
let xiaomi = document.getElementById('xiaomi')
let samsung = document.getElementById('samsung')
apple.addEventListener('click', showApple)

function showApple() {
    let appleFilter = productos.filter((apple) => apple.marca.toLowerCase().includes('apple'))
    if (appleFilter.length >= 1) {
        resetearStockMostrado()
        imprimirCards(appleFilter)
    } else {
        alert('No hay productos disponibles de la marca Apple')
        return
    }

}