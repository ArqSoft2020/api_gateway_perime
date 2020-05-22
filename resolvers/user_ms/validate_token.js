import axios from 'axios';
import {AuthenticationError} from 'apollo-server';
/* #########################    QUERYS  ######################### */

/* GET IF TOKEN IS VALID BY ID */
export const validateToken = async (id, ctx) => {
    const flagValidated = await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.VALIDATE_BASE_ENDPOINT}/${id}`, { headers: { 'Authorization': `Bearer ${ctx.token}`}})
        .then(answer => {          
            return true
        }).catch(error => {
            throw new AuthenticationError('must be authenticate');
        })
    return flagValidated;
}


export const parseJwt = (token) => {
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload);    
}