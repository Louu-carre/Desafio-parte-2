let producto = {
    nombre:"Camiseta",
    precio:1500, 
    stock:20
}
producto.nombre = "Zapatillas"

producto.categoria = "Calzado"

delete producto.stock
console.log(producto)
