import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL categorias */
export const categorias = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/categorias`).then(res => res.data)    
}
/* GET ALL productos */
export const productos = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/productos`).then(res => res.data)    
}

/* GET ITEM categoria BY ID IN DATABASE */
export const getCategoria= async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/categoria/${id}`).then(res => res.data)
}
/* GET ITEM categoria BY ID IN DATABASE */
export const getCategoria= async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/producto/${id}`).then(res => res.data)
}

