import { gql } from "apollo-server";
import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'
import {busqueda_schema, busqueda_querys, busqueda_mutations} from './busqueda_schema/busqueda_schema'
const schema = gql`

    type Query {
        ${multimedia_querys}
        ${busqueda_querys}
    }

    type Mutation {
        ${multimedia_mutations}
        ${busqueda_mutations}
    }

    ${multimedia_schema}
    ${busqueda_schema}
`;

export default schema