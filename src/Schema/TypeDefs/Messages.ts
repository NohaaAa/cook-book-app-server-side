import {GraphQlObjectType, GraphQLString, GraphQLBoolean} from 'graphql';

export const MessageType = new GraphQlObjectType({
    name:"Message",
    fields: {
        successful: {type: GraphQLBoolean},
        message: {type: GraphQLString}
    }
});