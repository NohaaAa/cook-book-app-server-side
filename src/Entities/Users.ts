import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId!: number;
    @Column()
    username!: string;
    @Column()
    userEmail!: string;
    @Column()
    userPassword!: string;
}