import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, {}, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, ).then(res => res.data)    
}

/* GET USER BY ID */
export const getUser = async (_, {id}, ctx) => {

    
    const flagValidated = await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.VALIDATE_BASE_ENDPOINT}/${id}`, { headers: { 'Authorization': `Bearer ${ctx.token}`}})
        .then(answer => {
            console.log("-----------------AAAnswer")
            console.log(answer.status)
        }).catch(error => {
                console.log("-----------------------------------Error")
                console.log(error);
        })
    console.log(flagValidated)

    return  await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,).then(res => res.data);
   

}
