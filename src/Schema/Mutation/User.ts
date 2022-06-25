import { UserType } from "../TypeDefs/User";
import { GraphQLString, GraphQLID } from 'graphql';
import { Users
 } from "../../Entities/Users";
 import { MessageType } from "../TypeDefs/Messages";

 export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        userId: {type: GraphQLID},
       oldPassword: {type: GraphQLString},
       newPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {userId, oldPassword, newPassword} = args;
        const user = await Users.findOne({where: {userId}});
        if(!user) {
            throw new Error ("User not found");
        }
        const userPassword = user?.userPassword;
        if (userPassword === oldPassword) {
           await Users.update({userId}, {userPassword: newPassword});
           return {
            successful: true,
            message: "Password updated successfully!"
           }
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
    type: MessageType,
    args: {
       userId: {type: GraphQLID}
        },
        async resolve(parent: any, args: any) {
        const {userId} = args;
        await Users.delete(userId);
        return {
            successful: true,
            message: "User deleted successfully!"
        }
    }   
}