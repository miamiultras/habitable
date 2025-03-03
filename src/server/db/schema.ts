// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

import {
  pgEnum,
  jsonb,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `habitable_${name}`);


export const users = pgTable("habitable_users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const terraformationPhaseEnum = pgEnum("terraformation_phase", ['1', '2', '3', '4']);
export const vehicleTypeEnum = pgEnum("vehicle_type", ['space', 'ground']);

export const planets = pgTable("habitable_planets", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  terraformationPhase: terraformationPhaseEnum("terraformation_phase").notNull(),
  resources: jsonb("resources").$type<{
    crystal: number;
    metal: number;
    energy: number;
  }>().notNull().default({ crystal: 0, metal: 0, energy: 0 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const buildings = pgTable("habitable_buildings", {
  id: varchar("id").primaryKey(),
  planetId: varchar("planet_id").references(() => planets.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  image: text("image").notNull(),
  level: integer("level").notNull().default(1),
  cost: jsonb("cost").$type<{
    crystal?: number;
    metal?: number;
    energy?: number;
  }>().notNull(),
  production: jsonb("production").$type<{
    crystal?: number;
    metal?: number;
    energy?: number;
  }>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const vehicles = pgTable("habitable_vehicles", {
  id: varchar("id").primaryKey(),
  planetId: varchar("planet_id").references(() => planets.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  image: text("image").notNull(),
  type: vehicleTypeEnum("type").notNull(),
  cost: jsonb("cost").$type<{
    crystal?: number;
    metal?: number;
    energy?: number;
  }>().notNull(),
  stats: jsonb("stats").$type<{
    speed?: number;
    capacity?: number;
    power?: number;
    range?: number;
  }>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const availableBuildings = pgTable("habitable_available_buildings", {
  planetId: varchar("planet_id").references(() => planets.id, { onDelete: 'cascade' }),
  buildingId: varchar("building_id").references(() => buildings.id, { onDelete: 'cascade' }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
