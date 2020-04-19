
/* #########################    MUTATION  ######################### */

/* POST CATEGORIA BY ID */
export const postCategoria= async (_, {id}, ctx) => {
    return await axios.post(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/categoria/${id}`).then(res => res.data)
}
/* PUT CATEGORIA BY ID */
export const putCategoria = async (_, {id}, ctx) => {
    return await axios.put(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/categoria/${id}`).then(res => res.data)
}

/* DELETE CATEGORIA BY ID */
export const deleteCategoria = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/categoria/${id}`).then(res => res.data)
}

/* POST PRODUCTO BY ID */
export const postProducto = async (_, {id}, ctx) => {
    return await axios.post(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/producto${id}`).then(res => res.data)
}

/* PUT PRODUCTO BY ID */
export const putProducto = async (_, {id}, ctx) => {
    return await axios.put(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/producto/${id}`).then(res => res.data)
}

/* DELETE PRODUCTO BY ID */
export const deleteProducto = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.BUSQUEDA_URL}:${ctx.BUSQUEDA_PORT}/${ctx.BUSQUEDA_BASE_ENDPOINT}/producto/${id}`).then(res => res.data)
}