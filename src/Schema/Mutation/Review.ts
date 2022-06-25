import { GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import { ReviewType } from "../TypeDefs/Review";
import { Reviews } from '../../Entities/Reviews';
import { MessageType } from '../TypeDefs/Messages';
import { Recipes } from '../../Entities/Recipes';

export const CREATE_REVIEW = {
    type: ReviewType,
    args: {
        recipe_id: {type: GraphQLInt},
        review_author_id: {type: GraphQLInt},
        review_author_name: {type: GraphQLString},
        review: {type: GraphQLString},
        review_rating: {type: GraphQLString},
        review_date_submitted: {type: GraphQLString},
        review_date_modified: {type: GraphQLString},
    },
    async resolve(parent: any, args: any) {
        const {recipe_id, review_author_id, review_author_name, review} = args;
        const recipe = await Recipes.findOne({where: {recipe_id}});
        if(!recipe) {
            throw new Error("Recipe not found");
        } else {
            await Reviews.insert({
                recipe_id,
                review_author_id,
                review_author_name,
                review,
                review_rating: "0",
                review_date_submitted: new Date().toISOString(),
            });
            await Recipes.update({recipe_id}, {
                recipe_reviewCount: recipe.recipe_reviewCount + 1
            });
        }
        return args;
    } 
}

export const DELETE_REVIEW = {
    type: MessageType,
    args: {
        review_id: {type: GraphQLID}
    },
    async resolve(parent: any, args: any) {
        const {review_id} = args;
        await Reviews.delete(review_id);
        return {
            successful: true,
            message: "Review deleted successfully!"
        };
    } 
}