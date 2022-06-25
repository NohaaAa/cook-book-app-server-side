import { UserType } from "../TypeDefs/User";
import { GraphQLString, GraphQLID } from 'graphql';
import { Users
 } from "../../Entities/Users";

 export const UPDATE_PASSWORD = {
    type: UserType,
    args: {
        userId: {type: GraphQLID},
       oldPassword: {type: GraphQLString},
       newPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {userId, oldPassword, newPassword} = args;
        const user = await Users.findOne({where: {userId}});
        const userPassword = user?.userPassword;
        if (userPassword === oldPassword) {
           await Users.update({userId}, {userPassword: newPassword});
        } else {
            throw new Error("PASSWORDS ARE NOT MATCH!!");
        }
        return args;
    }  
 }
export const CREATE_USER = {
    type: UserType,
    args: {
        username: {type: GraphQLString},
        userEmail: {type: GraphQLString},
        userPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {username, userEmail, userPassword} = args;
        await Users.insert({username, userEmail, userPassword});
        return args;
    }   
}
export const DELETE_USER = {
    type: UserType,
    args: {
       userId: {type: GraphQLID}
        },
        async resolve(parent: any, args: any) {
        const {userId} = args;
        await Users.delete(userId);
        return args;
    }   
}