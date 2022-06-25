import { RecipeType } from './../TypeDefs/Recipe';
import { Recipes } from './../../Entities/Recipes';
import { GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import { MessageType } from '../TypeDefs/Messages';

export const CREATE_RECIPE = {
    type: RecipeType,
    args: {
        recipe_name: { type: GraphQLString },
        recipe_description: { type: GraphQLString },
        recipe_images: { type: GraphQLString },
        recipe_cookTime: { type: GraphQLString },
        recipe_ingredientParts: { type: GraphQLString },
        recipe_ingredientQuantities: { type: GraphQLString },
        recipe_instructions: { type: GraphQLString },
        recipe_category: { type: GraphQLString },
        recipe_servings: { type: GraphQLInt },
        recipe_authorId: { type: GraphQLInt },
        recipe_authorName: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const {
            recipe_name, recipe_description,
            recipe_images, recipe_cookTime,
            recipe_ingredientParts, recipe_ingredientQuantities,
            recipe_instructions, recipe_category,
            recipe_servings, recipe_authorId, recipe_authorName
        } = args;

        await Recipes.insert({
            recipe_name,
            recipe_description,
            recipe_images, recipe_cookTime,
            recipe_ingredientParts, recipe_ingredientQuantities,
            recipe_instructions, recipe_category,
            recipe_servings, recipe_authorId, recipe_authorName,
            recipe_datePublished: new Date().toISOString(),
            recipe_aggregateRating: 0,
            recipe_reviewCount: 0,
            recipe_calories: '0',
            recipe_fatContent: '0',
            recipe_saturatedFatContent: '0',
            recipe_cholesterolContent: '0',
            recipe_sodiumContent: '0',
            recipe_proteinContent: '0',
            recipe_sugarContent: '0',
            recipe_carbohydrateContent: '0',
            recipe_fiberContent: '0',
            recipe_yeild: '0',
            keywords: recipe_category,
        });
        return args;
    }
}

export const DELETE_RECIPE = {
    type: MessageType,
    args: {
        recipe_id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { recipe_id } = args;
        await Recipes.delete(recipe_id);
        return {
            successful: true,
            message: "Recipe deleted successfully!"
        };
    }
}

export const RATE_RECIPE = {
    type: MessageType,
    args: {
        recipe_id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { recipe_id, recipe_aggregateRating } = args;
        await Recipes.update(recipe_id, {
            recipe_aggregateRating: recipe_aggregateRating
        });
        return {
            successful: true,
            message: "Recipe rated successfully!"
        };
    }
}