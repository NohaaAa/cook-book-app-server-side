import { GraphQLList } from "graphql";
import { RecipeType } from "../TypeDefs/Recipe";
import { Recipes } from '../../Entities/Recipes';

export const GET_ALL_RECIPES = {
    type: new GraphQLList(RecipeType),
    resolve() {
        return Recipes.find();
    }
}

export const GET_RECIPE_BY_ID = {
    type: new GraphQLList(RecipeType),
    resolve(parent: any, args: any) {
        const {recipe_id} = args;
        return Recipes.findOne({where: {recipe_id}});
    }
}