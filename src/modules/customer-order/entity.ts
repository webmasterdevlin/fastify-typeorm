import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Item } from "../item/entity";

@Entity()
export class CustomerOrder {
  @PrimaryColumn()
  customerOrderId: number;

  @ManyToOne((type) => CustomerOrder)
  @JoinColumn({ name: "customerId" })
  customerId: number;

  @ManyToOne((type) => Item)
  @JoinColumn({ name: "itemId" })
  itemId: number;
}
