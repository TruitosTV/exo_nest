export class ArticleEntity {}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    email:string;

    @Column({ length: 255 })
    password:string;

    @Column({ length: 80 })
    firstname:string;

    @Column({ length: 80 })
    lastname: string;
}
