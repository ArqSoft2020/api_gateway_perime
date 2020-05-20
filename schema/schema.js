import { gql } from "apollo-server";


import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'
import {ubication_schema, ubication_queries, ubication_mutations} from './ubication_schema/ubication_schema'
import {search_schema, search_querys, search_mutations} from './search_schema/search_schema'
import {comments_schema,comments_querys,comments_mutations} from './comentarios_schema/comentarios_schema'
import {user_schema, user_querys, user_mutations} from './user_schema/user_schema'
import {session_schema, session_mutations} from './user_schema/session_schema'
import {publication_schema, publication_querys, publication_mutations} from './publication_schema/publication_schema'

const schema = gql`

    type Query {
        ${multimedia_querys}
        ${search_querys}
        ${ubication_queries}
        ${comments_querys}
        ${user_querys}
        ${publication_querys}
    }

    type Mutation {
        ${multimedia_mutations}
        ${search_mutations}
        ${ubication_mutations}
        ${comments_mutations}
        ${user_mutations}
        ${session_mutations}  
        ${publication_mutations}
    }        

    ${multimedia_schema}
    ${search_schema}
    ${ubication_schema}
    ${comments_schema}
    ${user_schema}
    ${session_schema}
    ${publication_schema}
`;

export default schema
