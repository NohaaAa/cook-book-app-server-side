import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Reviews extends BaseEntity {
    @PrimaryGeneratedColumn()
    review_id!: number;
    @Column()
    recipe_id: number;
    @Column()
    review_author_id: number;
    @Column()
    review_author_name: string;
    @Column()
    review_rating: string;
    @Column()
    review: string;
    @Column()
    review_date_submitted: string;
    @Column()
    review_date_modified: string;
}