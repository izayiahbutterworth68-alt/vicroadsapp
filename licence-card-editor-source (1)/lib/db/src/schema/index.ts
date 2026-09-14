import { jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const licenceTransfersTable = pgTable("licence_transfers", {
  id: serial("id").primaryKey(),
  keywordHash: text("keyword_hash").notNull().unique(),
  payload: jsonb("payload").$type<Record<string, string>>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type LicenceTransfer = typeof licenceTransfersTable.$inferSelect;