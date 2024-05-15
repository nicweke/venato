CREATE TABLE IF NOT EXISTS "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"location" text NOT NULL,
	"address" text NOT NULL,
	"email" text NOT NULL,
	"city" text NOT NULL,
	"tel" text NOT NULL,
	"contact_person" text NOT NULL
);
