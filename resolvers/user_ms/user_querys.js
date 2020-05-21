import axios from 'axios';
import {validate_token} from './validate_token';
import {AuthenticationError} from 'apollo-server';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, {}, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, ).then(res => res.data)    
}

/* GET USER BY ID */
export const getUser = async (_, {id}, ctx) => {
    if(validate_token(id, ctx))
        return  await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,).then(res => res.data);
    throw new AuthenticationError('must authenticate');
}
