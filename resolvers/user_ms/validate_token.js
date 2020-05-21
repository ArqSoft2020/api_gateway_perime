import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET IF TOKEN IS VALID BY ID */
export const validateToken = async (id, ctx) => {
    const flagValidated = await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.VALIDATE_BASE_ENDPOINT}/${id}`, { headers: { 'Authorization': `Bearer ${ctx.token}`}})
        .then(answer => {            
            return true
        }).catch(error => {
            return false
        })
    return flagValidated
}
