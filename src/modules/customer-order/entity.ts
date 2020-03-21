import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Customer } from "../customer/entity";
import { Item } from "../item/entity";

@Entity()
export class CustomerOrder {
  @PrimaryColumn()
  customerOrderId: number;

  @ManyToOne(type => Customer)
  @JoinColumn({ name: "customerId" })
  customer: Customer;

  @ManyToOne(type => Item)
  @JoinColumn({ name: "itemId" })
  item: Item;
}
