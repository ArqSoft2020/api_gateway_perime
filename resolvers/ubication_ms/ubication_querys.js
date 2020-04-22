import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL */
export const allUbication = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}`).then(res => res.data)    
}


export const ubicationById = async (_, {id, type}, ctx) => {
    return await axios.get(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}/${id}`).then(res => res.data)
}


export const ubicationByPublication = async (_, {id, idPublication}, ctx) => {
    return await axios.get(`http://${ctx.AUTH_URL}:${ctx.AUTH_PORT}/${ctx.AUTH_USERS_ENTRY}/${idPublication}`).then(res => res.data)
}


