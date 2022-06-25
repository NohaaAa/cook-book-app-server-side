import { GraphQLList } from "graphql";
import { ReviewType } from '../TypeDefs/Review';
import { Reviews } from '../../Entities/Reviews';


export const GET_ALL_REVIEWS = {
    type: new GraphQLList(ReviewType),
    resolve() {
        return Reviews.find();
    }
}

export const GET_RECIPE_REVIEWS = {
    type: new GraphQLList(ReviewType),
    resolve(parent: any, args: any) {
        const {recipe_id} = args;
        return Reviews.findOne({where: {recipe_id}});
    }
}