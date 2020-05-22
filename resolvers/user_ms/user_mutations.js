import axios from 'axios';
import {validateToken, parseJwt} from './validate_token';

/* #########################    MUTATION  ######################### */

/* CREATE USER  */
export const createUser = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, data, {"headers": {"Content-Type": "application/json"}}).then(res => res.data)
}

/* UPDATE USER BY ID AND USER */
export const updateUser = async (_, {id, input}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated){
        const data = JSON.stringify(input);
        return await axios.put(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`, data, {"headers": {"Content-Type": "application/json"}}).then(res => res.data)
    }        
}

/* DELETE USER BY ID */
export const deleteUser = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`, _,).then(res => res.data)
}

