import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';


export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        userId: {type: GraphQLID},
        username: {type: GraphQLString},
        userEmail: {type: GraphQLString},
        userPassword: {type: GraphQLString},
    })
});