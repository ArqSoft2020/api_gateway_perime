export const busqueda_schema = `

    type Categoria {
        id: ID
        nombrecategoria: String
        tipocategoria: String
    }
    type Producto{
        id: ID
        categoriaid Int
        tipocategoria: String
        descripcioncategoria: String
    }
    
`

export const busqueda_querys = `
    getCategoria(id : ID): Categoria
    categorias: [Categoria]
    getProducto(id : ID): Producto
    productos: [Categoria]
`

export const busqueda_mutations = `
    postCategoria(id: ID): Categoria
    putCategoria(id: ID): Categoria
    deleteCategoria(id: ID): Categoria
    postProducto(id: ID): Producto
    putProducto(id: ID): Producto
    deleteProducto(id: ID): Producto
`   