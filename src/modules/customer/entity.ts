import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class CustomerEntity {
  @PrimaryColumn()
  customerId: number;
  @Column({ length: 50, nullable: false })
  firstName: string;
  @Column({ length: 50, nullable: false })
  middleName: string;
  @Column({ length: 50, nullable: true })
  lastName: string;
  @Column({ nullable: true })
  age: number;
}
