import { Wifi } from "@prisma/client";
import { prisma } from "../config/db.js";

export type CreateWifi = Omit<Wifi, "id">;