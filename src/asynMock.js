const productos = [
    {
        id: "1",
        nombre: "Camiseta de jugador",
        precio: 18000,
        categoria: "camisetas",
        img:"https://sporting.vtexassets.com/arquivos/ids/621440-800-800?v=637981524913300000&width=800&height=800&aspect=true",
        stock: 45,
        descripcion: "Camiseta titular, modo jugador",
        idCat:"1"
    },
    { id: "2", 
    nombre: "Camiseta de arquero", 
    precio: 17000, 
    categoria: "camisetas", 
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKjxRV2e-kFBUxSDKXmwxVh9yIakp12tPJQxnb5_NQldWJxCSgo-kBWFr6zrStMP_PPOLaz5u6zxmdOGqsbkUHNcD5WCq34jaxTSoTMEM&usqp=CAE",
    stock: 35, 
    descripcion: "Camiseta titular de arquero",
    idCat:"1"
    },
    { id: "3", 
    nombre: "short titular", 
    precio: 10000, 
    categoria: "short", 
    img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-independiente-puma-oficial-rojo-640020771563002-1.jpg", stock: 50, 
    descripcion: "Short titular de jugador",
    idCat: "2"
    },
    {id: "4", 
    nombre: "Short titular Arquero", 
    precio: 12000, 
    categoria: "short", 
    img: "https://http2.mlstatic.com/D_NQ_NP_835089-MLA54356459439_032023-V.jpg", 
    stock: 35, 
    descripcion: "short titular de arquero",
    idCat:"2"
    },
    {id: "5", 
    nombre: "Pantalon de entrenamiento", 
    precio: 12000, 
    categoria: "Ropa de Entrenamiento", 
    img: "https://sporting.vtexassets.com/arquivos/ids/377686-800-800?v=637692460437500000&width=800&height=800&aspect=true", 
    stock: 35, 
    descripcion: "Excelente pantalon para entrenar del Club Atletico Independiente",
    idCat:"3"
    },
    {id: "6", 
    nombre: "Camiseta de entrenamiento", 
    precio: 12000, 
    categoria: "Ropa de Entrenamiento", 
    img: "https://sporting.vtexassets.com/arquivos/ids/377621/1066751-002-1.jpg?v=637692295745200000", 
    stock: 35, 
    descripcion: "Excelente remera para entrenar del Club Atletico Independiente",
    idCat:"3"
    },

]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        },700)
    })
}

export const getProductoById = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 700);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
         setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
         }, 100);
        
    })
}
