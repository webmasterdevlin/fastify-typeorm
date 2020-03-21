import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column({ length: 50, nullable: false })
  firstName: string;

  @Column({ length: 50, nullable: true })
  middleName: string;

  @Column({ length: 50, nullable: false })
  lastName: string;

  @Column({ nullable: true })
  age: number;
}
