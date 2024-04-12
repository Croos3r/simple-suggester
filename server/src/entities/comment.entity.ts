import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./user.entity";
import Suggestion from "./suggestion.entity";

@Entity()
export default class Comment {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_uuid"})
    user: User;

    @ManyToOne(() => Suggestion)
    @JoinColumn({name: "suggestion_uuid"})
    suggestion: Suggestion;

    @Column()
    text: string;

    @CreateDateColumn()
    createdAt: Date;
}
