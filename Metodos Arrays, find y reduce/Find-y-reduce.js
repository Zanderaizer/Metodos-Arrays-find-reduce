const productos = [
    { nombre: "Sandia", precio: 120 },
    { nombre: "Manzana", precio: 25 },
    { nombre: "Platano", precio: 45 },
    { nombre: "Aguacate", precio: 300 },
    { nombre: "Uvas", precio: 75 }
];

const buscarProducto = (nombreProducto) => {
    return productos.find(producto => producto.nombre === nombreProducto);
};

const productoEncontrado = buscarProducto("Aguacate");
console.log("Producto encontrado:", productoEncontrado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Total de la compra:", totalCompra);