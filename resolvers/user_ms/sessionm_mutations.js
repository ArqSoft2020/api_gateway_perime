import axios from 'axios';
import {createUser} from './user_mutations';
/* #########################    MUTATION  ######################### */

/* LOGIN USER BY EMAIL AND PASSWORD IN MOVIL*/
export const sessionmLogin = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);    
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.SESSION_MOVIL_BASE_ENDPOINT}`, data, {"headers": {"Content-Type": "application/json"}}).then(res => res.data)
}

/* LOGOUT USER BY ID IN MOVIL*/
export const sessionmLogout = async (_, {id}, ctx) => {    
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.SESSION_MOVIL_BASE_ENDPOINT}/${id}`, _,).then(res => res.data)
}

export const sessionmRegister = async (_, {input}, ctx) => {
    try{
        const user = await createUser(_, {input}, ctx);        
        if(user.id_user == undefined)
            return new Error('Error en el Servidor :'+user);
        const data = {input: {email:input.email_user, password:input.passhash_user}}        
        return await sessionmLogin(_, data, ctx)
    }catch{
        return new Error('Error en el Servidor en el apigateway! vaya y mire que paso<<');
    }
}