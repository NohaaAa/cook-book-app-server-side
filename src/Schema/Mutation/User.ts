import { UserType } from "../TypeDefs/User";
import { GraphQLString } from "graphql";
import { Users
 } from "../../Entities/Users";
export const CREATE_USER = {
    type: UserType,
    args: {
        username: {type: GraphQLString},
        userEmail: {type: GraphQLString},
        userPassword: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {username, userEmail, userPassword} = args;
        Users.insert({username, userEmail, userPassword});
        return args;
    }   
}