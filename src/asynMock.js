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
    nombre: "Short titular", 
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
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhETEhIVFRUWFhgVFRUSFRcXEhUYFxUXGBUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lICYtLSstKy42Ky0tMC0uLS0tLS0rLS0uLSsrLS0tLS0rMC0tLS01LS0tLS0rLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHAQj/xABHEAACAQIDAwcICAMECwAAAAAAAQIDEQQSIQUxQQZRYXGRobEHEyIyQlKBwSNygrLC0eHwYpKiFDNTVBZDRGODo8PS4uPx/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EAC0RAQACAQMCBQIFBQAAAAAAAAABAhEDITEEEiJBUWHwE3EFgZGx4RQyQlKh/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP2ptzCYdxWIxFKi5axVWpGDa50m9QMgDXqvLnZa/wBsov6ks/3LmOr+U7ZUd1WpL6uHreMoIjK8ad54iW5A5zivLHs+OkaOJl9iEV/VNPuLGp5aKXsYSbX8dWMX2KLGUxpXnydUBymPlmjxwf8Azv8A1k9Lyx0Paws19WpF+KQzC30NT0/Z08HO6XlfwD9ajiI/Cm198u6flW2W/WlVj0ulJ/cuxlWdK8eTeQYvYnKHB4tN4avCrZXai7Tjf3oO0o/FGUJY5jAAAAAAAAAAAAAAAAAAAAAAAAAfP3KrHuviq9VvfNxjxtCLywS6LWfW2+J2XlntSphsHWq07Z0kot+y5O2a3Fq97HBK9Sy367unSN2tOZW7StnS6Cm03n7I/Nvg+5fl+7lcYy97TqXX++tEMou+re5cZXvzesSOElZZnmfBZty3t3e79DG6FYSzhLnXYrfqRVKXPCm/s93Se2luzNvivRsvjkvw8DyUpXfXzJ68y1X7RC0xE+SGeGh/hr4O3y6u0jlhKfuf1PT96dpcuo+jw3b91ylYjoXbL/t6e8ndSaU+QtnhKXuvqzPnPVhqfCmvHxLhzd27L4Nvpe9I8VR6W46LT/yGVeyvovuTmLeGxNGvGKWSSzZdG4t2nG/M1c+kD5kpzb1vzPgt+7emfRewMd5/DUKr3zpxlK3CVvSXbcvSWh11IjFoZAAF3PAAAAAAAAAAAAAAAAAAAAAGleVbEqOFhDjOpouiMJNt9Tce44+qd5Nvh8nf733UdI8rWJvVoU17Mb/Gcvypd5z+UElp1fBf/THbl3OjpjRj9Vpxbe6PpPr4IqpwaTnL1pavoXCP74kkIJ79yd+t8CRxu+9/ApLbrVBkaX8Ter6X+SPHT1SXsp9trX8Sfe2+bd1iEd7IT2raVPeumMezV+LKZR9Z/wC8S/rT+S7C4owvK73J3+L0uUSj6H2m+8lWY2Qx0t0t9zk/mU0Y6Uv3wsT1I2lDpk+9FNJep0NhGN/nsohu+wn2Nr8jt3kvxOfAxj/h1KkO2Wdd00cSivU6YyXezq3kcxN6eJp+7KnP+eLj/wBMtXlpdZXOl9sfP+uiAAyuOAAAAAAAAAAAAAAAAAAAAAOOeUKvmxtRcIuKXwpxv3ykavV3GZ5SVc+KrS/jqdnnJJdyXYYesjFPL0mjXt04j2hCtCSKKUrksUVlmrCiXMhU5kV5SixCZKasiiS9EkkUtaBEoMZvpvpfyPJqyl0PxTPdovSPQ/yKqi0l1JhXzlFDR0/3xN+8kFe2Iq0/eo3+MJpfjZoEnrE2vydYnJtCivf85Dtg5LvSLV5a3UVzpWj2dtABmcAAAAAAAAAAAAAAAAAAAA8bPQBwDESvUk30d7cvxFnW3l7jIZak1zadjkvkWNfeYZeojh5AlIIPUnIWgseRiV2CRC2Ect561uPEip6K4GL2hXVpdenwdvkXlLWPXH9TXalZuL+vbwuu25sWCei6iZjDX0b99pW8t6MtsCv5vFYapf1a1JvqzJS7rmKmtS4d8t1vVrPqf6iJTauYmH0eCDA11Up05rdOEZL7ST+ZOZ3mgAAAAAAAAAAAAAAAAAAAABwTaf8Aez/ftT/MxtbeX2Mfpv6t+9/mWVUwy9RXhGi4gQIkpshaE6KZM9TKZELy8ii22nXyU5vmi/DQukYXlLWtSa52l35vwkxyw61u2kyw9FehB87u+s2XZ0tEapg56JGybMnoWs1OjtunxC9Jk0NzKMUtSqi/D9SjcnmXcOQmK85gMK+aGR/8OTh+Ez5pXknr5sJOPuVpJdUoxl4tm6meOHnNevbqWj3AASxAAAAAAAAAAAAAAAAB5Pcz0orerLqfgB8/Yl+k/qrwj+pbVHuJaz9bqf4SCb3GGXqIeLgVkSZNwIWhXCRVNkCkVtkJyoqS6TXuUDbUVvteT8F8zOYnDOWsXZmuYnEfTu+qilTl3372y1Wn1VvD2z5rHDMz+zampicbg3TeZaxZdYKpdXXAtO7V0M0tiWxV1dJlFOdmKFVSj1byiUXw1MbqTOd4dO8j9XTFw5nTl250/BHRzkXkmxTji5w4TpS06Yyi13OZ10zU4cHra41pAAWagAAAAAAAAAAAAAAAAR136Mup+BIQ4t/Rz+rLwYTD57qbn8fFFvKW4mW74P5FtfRdZhemesuIMtmyam9CJWiVLdivMUV+cizhEzhVis3m6ji7NQclbnS0NPwkL3v7XP8ADXtZtWKq2pVXzQl91mp4dNt24LTrei8S9eHO6yfHVndlVVOLpz3rTUtKtCVCd98HxPU21GtD1lpJeJmaNSFWF7XT3rmInZkpXviI844n2W8KUlapReaL9klp4yL33i+KadiD+xTptyou8Xvpvc+pk+Hxak7Wal7s16X2XxKtiszG07ft+TavJ9iMu0MM76Nyi9fepyS72juZ8+cm6qhi8LLmrU78PbSZ9BmSnDmfiMeOJ9gAF3PAAAAAAAAAAAAAAAACx27KSw2IcVeXmqll05HYvjG8o8v9lxOb1fNTT6nFphav90OFSw84KOeEo5lmjmi45ovdJXWq03lGy8B56tCjmUM7l6UvVjlhKV30ejb4mb5YObrTnOo5Zq1aCi7/AEap1ZRjFX0s45ZaaaljyfgniIX4Rqv4KjN69hhnaXoa2m2nnzw9xuwPN5lOvTjleWWaFe8Xro8tN8z7CDamy6mGnGnUcW5QjUWW/qyuldSSaem5rQ6FDBxlTVaT846MlBOS+jruDUKNWo9+Wm5+lJXukt5oO3VPLhZzk5zkq0pykmpPNiKktU92rkrcCceHLBXXn60Ujj58/li3Itqml0V1KltSKdW5Vs2mFNTWnUXPCS/pZrdLSLf8Ue53M9jValUa5rdunzMFT1cVwjqy9Wh1U+KPsv8ACVck2n6st/WXsYulK69VlpGlnimt9l17uJe4GpmTpz3oiWTS9P0ZCM01fwKKk0+NvH4EFJOGnDwJXV5iuG337brzZb+lpW9+H3kfRx81YKo88XxzLuaPpUyUcv8AEP8AH8wAF3OAAAAAAAAAAAAAAAADDcsp5cDine30bV106fMzJj9v7OeIw9WipZXONk2rpO6auvgFqTEWiZ9XC9s7UrVlCVWSk4rKnZLRXbcrb5PTXeZDkdOk6z87UUIulNXbirv0bxi5NJSccyTbItvcnMVh2lVpPKm3ninKnzL0+HU7Mwqst27rWnaYpd6vbNcVnb2b3UxmIdeFVU4SpJOm6NOrSlHzEtJU0lPVta34uzNe5ZUYUZ06EJ5lTptX42nWq1IqXNLLON0YKpPmWpbdfgxnbCv04jU7/bHzdWtSKcSrMlznkprj3tfIheZhd7L2RUxblQp+s4uS3+x6XDqKcNyCxzVlTim96c02uhqNzevJTsTEf2lYiVGUKUYSSnNZczkkllT1krX13HXS9Y2czqtXx7ej5e2zsLE4F0/PRUbq6kszg1drK24q0r8OkhjKM7NaNbmrH1M0Y7Fcn8FU/vMLQm+eVKDfa0TNVdPqu2MTD51Ur71r0FVlzHfXyO2b/lKPwjbwH+h2zf8AKUv5SvZLY/r6+kuBRll1Wltbs+mKUrpPnSfaYzC8msDTeaGFoRl7ypRzfzWuZUtWMNTqNeNXGI4AAWawAAAAAAAAAAAAAAAAAABjsZsHB1damGozfPKnFy7bXMiAmJmOGs1+QOy5b8Ml9WdSP3ZItJeTLZT/ANTNdVar85G4gjEL/Vv/ALS1Oh5ONlR18xJ/WrVmuxzsZjZ/J3BUHejhqMJe9GnHP/Na/eZQE4ROpaeZkAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=", 
    stock: 35, 
    descripcion: "Short titular de arquero",
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
