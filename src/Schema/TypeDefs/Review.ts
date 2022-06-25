import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

export const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        recipe_id: {type: GraphQLInt},
        review_id: {type: GraphQLID},
        review_author_id: {type: GraphQLInt},
        review_author_name: {type: GraphQLString},
        review_rating: {type: GraphQLString},
        review: {type: GraphQLString},
        review_date_submitted: {type: GraphQLString},
        review_date_modified: {type: GraphQLString},
    })
});