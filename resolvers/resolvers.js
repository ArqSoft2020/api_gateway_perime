// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'
import {categorias, productos, getCategoria, getProducto} from './busqueda_ms/busqueda_querys'
import {postCategoria, putCategoria, deleteCategoria, postProducto, putProducto, deleteProducto } from './busqueda_ms/busqueda_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
        getFileImage,
        categorias, 
        productos, 
        getCategoria, 
        getProducto 
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        postCategoria, 
        putCategoria, 
        deleteCategoria, 
        postProducto, 
        putProducto, 
        deleteProducto
    }
}

export default resolvers
