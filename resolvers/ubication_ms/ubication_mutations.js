
/* #########################    MUTATION  ######################### */


export const createUbication = async (_, {id, type}, ctx) => {
    return await axios.post(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}/${id}/${type}`).then(res => res.data)
}


export const updateUbication = async (_, {id, type}, ctx) => {
    return await axios.put(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}/${id}/${type}`).then(res => res.data)
}


export const deleteUbication = async (_, {id, type}, ctx) => {
    return await axios.delete(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}/${id}`).then(res => res.data)
}