import axios from 'axios';

/* #########################    MUTATION  ######################### */

/* LOGIN USER BY EMAIL AND PASSWORD IN WEB*/
export const sessionwLogin = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.SESSION_WEB_BASE_ENDPOINT}`, data, {"headers": {"Content-Type": "application/json"}}).then(res => res.data)
}

/* LOGOUT USER BY ID IN WEB*/
export const sessionwLogout = async (_, {id}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.SESSION_WEB_BASE_ENDPOINT}/${id}`, _,).then(res => res.data)
}
