import { Agent } from "./agent.interface";

export interface Auctioneer {
  name: string;
  MAX_LIMIT: number;
  subastadorNotificado: boolean;
  update(agent: Agent): void;
}