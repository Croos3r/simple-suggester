import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    name: string;

    @Column()
    hashedPassword: string;

    @Column()
    admin: boolean;
}
