import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn
} from "typeorm";
import { CustomerEntity } from "../customer/entity";
import { ItemEntity } from "../item/entity";

@Entity()
export class CustomerOrderEntity {
  @PrimaryColumn()
  customerOrderId: number;

  @ManyToOne(type => CustomerEntity)
  @JoinColumn({ name: "customerId" })
  customer: CustomerEntity;

  @ManyToOne(type => ItemEntity)
  @JoinColumn({ name: "itemId" })
  item: ItemEntity;
}
