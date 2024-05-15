import { pgTable, text } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  address: text("address").notNull(),
  email: text("email").notNull(),
  city: text("city").notNull(),
  tel: text("tel").notNull(),
  contact_person: text("contact_person").notNull(),
});
