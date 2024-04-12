import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Suggestion {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    title: string;

    @Column()
    description: string;
}
