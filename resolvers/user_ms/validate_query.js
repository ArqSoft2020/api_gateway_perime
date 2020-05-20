import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET IF TOKEN IS VALID BY ID */
export const validateToken = async (_, {id, token}, ctx) => {
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.VALIDATE_BASE_ENDPOINT}/${id}`,_ ,{"Authorization": "Bearer " + token}).then(res => res.data)
}
