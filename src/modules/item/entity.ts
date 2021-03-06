import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Item {
  @PrimaryColumn()
  itemId: number;

  @Column({ length: 50, nullable: false })
  description: string;

  @Column({ nullable: false })
  price: number;
}
