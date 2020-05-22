import axios from 'axios';
import {validateToken, parseJwt} from '../user_ms/validate_token';

/* #########################    MUTATION  ######################### */

/* STORE FILE IMAGE BY ID AND TYPE */
export const storeComment = async (_,{idpubl,iduser,text}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated)
        return await axios.post(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/add/${idpubl}/${iduser}/${text}`).then(res => res.data)
}

/* UPDATE FILE IMAGE BY ID AND TYPE */
export const updateComment = async (_,{id,text}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated)    
        return await axios.put(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/update/${id}/${text}`).then(res => res.data)
}

/* DELETE FILE IMAGE BY ID AND TYPE */
export const deleteComment = async (_,{id}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated)    
        return await axios.delete(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/delete/${id}`).then(res => res.data)
}
