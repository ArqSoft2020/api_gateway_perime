import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, {}, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, ).then(res => res.data)    
}

/* GET USER BY ID */
export const getUser = async (_, {id}, ctx) => {

    console.log("getUser");
    console.log("ctx.token: " + ctx.token);
    
    const flagValidated = await axios.get(`http://localhost:5000/perime-user-ms/validate/1`, {"headers": {"Authorization": `Bearer ${ctx.token}`}})
        .then(answer => {
            //console.log("answer.status" + answer.status);
	        return true
        }).catch(error => {
                console.log(error.status);
            }
        )
        ;

    /*
    if(flagValidated){
        console.log("Valid!")
        return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,).then(res => res.data);
    }
    else
    {
        console.log("Valid!");
    }
    */

}
