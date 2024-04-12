import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import User from './user.entity';
import Suggestion from './suggestion.entity';

@Entity()
export default class Vote {
  @PrimaryColumn()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_uuid' })
  user: User;

  @PrimaryColumn()
  @ManyToOne(() => Suggestion)
  @JoinColumn({ name: 'suggestion_uuid' })
  suggestion: Suggestion;

  @Column()
  up: boolean;
}
