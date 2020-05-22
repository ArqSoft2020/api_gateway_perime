/* #########################    MUTATION  ######################### */

import axios from 'axios';
import {validateToken, parseJwt} from '../user_ms/validate_token';

/* UPDATE PUBLICATION */
export const updatePublication = async (_, { id ,input }, ctx) => {

    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated){

    
        let values = {};

        if (input.title) {
            values.title = input.title;
        }

        if (input.description) {
            values.description = input.description;
        }

        if (input.state_publication) {
            values.state_publication = input.state_publication;
        }

        if (input.contact_information) {
            values.contact_information = input.contact_information;
        }

        if (input.id_image) {
            values.id_image = input.id_image;
        }

        if (input.stock) {
            values.stock = input.stock;
        }

        if (input.expiration_date) {
            values.expiration_date = input.expiration_date;
        }

        if (input.price) {
            values.price = input.price;
        }

        if (input.categories) {
            values.categories = input.categories;
        }

        const data = JSON.stringify(input);

        return await axios.post(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`, data, {headers: {'Content-Type': 'application/json'}}).then(res => res.data)
    }
}


/* CREATE PUBLICATION */
export const createPublication = async (_, {input}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated){
        const data = JSON.stringify(input);
        return await axios.post(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/`, data, {headers: {'Content-Type': 'application/json'}}).then(res => res.data)
    }        
}

/* DELETE PUBLICATION */
export const deletePublication = async (_, {id}, ctx) => {
    const authenticated = await validateToken(parseJwt(ctx.token).id, ctx)
    if(authenticated)  
        return await axios.delete(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
