import { gql } from "apollo-server";
import {ubication_schema, ubication_queries, ubication_mutations} from './ubication_schema/ubication_schema'
import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'

const schema = gql`

    type Query {
        ${multimedia_querys}
        ${ubication_queries}
    }

    type Mutation {
        ${multimedia_mutations}
        ${ubication_mutations}
    }

    ${multimedia_schema}
    ${ubication_schema}
`;

export default schema