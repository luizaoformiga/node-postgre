import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Tasks {
   @PrimaryGeneratedColumn()
   id: Number;
    
    @Column()
    title: String;
    
    @Column()
    decription: String;
    
    @Column({
        default: false
    })
    finished: Boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
 
}