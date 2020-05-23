import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL categorys */
export const categorys = async (_, args, ctx) => {    
    return await axios.get(`https://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}categorys`).then(res => res.data)    
}
/* GET ALL products */
export const products = async (_, args, ctx) => {    
    return await axios.get(`https://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}products`).then(res => res.data)    
}

/* GET ITEM producto BY ID IN DATABASE */
export const getCategory= async (_, {id}, ctx) => {
    return await axios.get(`https://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}category/${id}`).then(res => res.data)
}
/* GET ITEM producto BY ID IN DATABASE */
export const getProduct= async (_, {id}, ctx) => {
    return await axios.get(`https://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}product/${id}`).then(res => res.data)
}

