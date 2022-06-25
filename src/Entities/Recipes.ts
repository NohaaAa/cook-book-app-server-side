import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Recipes extends BaseEntity {
    @PrimaryGeneratedColumn()
    recipe_id!: number;
    @Column()
    recipe_name!: string;
    @Column()
    recipe_description!: string;
    @Column()
    recipe_images!: string;
    @Column()
    recipe_ingredientParts!: string;
    @Column()
    recipe_ingredientQuantities!: string;
    @Column()
    recipe_instructions!: string;
    @Column()
    recipe_category!: string;
    @Column()
    recipe_cookTime!: string;
    @Column()
    recipe_prepTime!: string;
    @Column()
    recipe_totalTime!: string;
    @Column()
    recipe_datePublished!: string;
    @Column()
    recipe_aggregateRating!: number;
    @Column()
    recipe_reviewCount!: number;
    @Column()
    recipe_calories!: string;
    @Column()
    recipe_fatContent!: string;
    @Column()
    recipe_saturatedFatContent!: string;
    @Column()
    recipe_cholesterolContent!: string;
    @Column()
    recipe_sodiumContent!: string;
    @Column()
    recipe_proteinContent!: string;
    @Column()
    recipe_sugarContent!: string;;
    @Column()
    recipe_carbohydrateContent!: string;
    @Column()
    recipe_fiberContent!: string;
    @Column()
    recipe_servings!: number;
    @Column()
    recipe_yeild!: string;
    @Column()
    recipe_authorId!: number;
    @Column()
    recipe_authorName!: string;
    @Column()
    keywords!: string;

}