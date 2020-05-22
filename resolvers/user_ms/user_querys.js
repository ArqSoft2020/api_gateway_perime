import axios from 'axios';
import {validateToken, parseJwt} from './validate_token';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, {}, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, ).then(res => res.data)    
}

/* GET USER BY ID */

export const getUser = async (_, {id}, ctx) => {        
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated)
        return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,).then(res => res.data);
}
