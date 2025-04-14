CREATE TABLE "phases" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"period" text NOT NULL,
	"focus" text NOT NULL,
	"details" text NOT NULL,
	"gradient_from" text NOT NULL,
	"gradient_to" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "video_resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"video_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"category" text NOT NULL,
	"phase_id" integer NOT NULL
);
