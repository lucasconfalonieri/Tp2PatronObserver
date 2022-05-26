import { Agent } from "../interfaces/agent.interface";
import { Auctioneer } from "../interfaces/auctioneer.interface";
import { ConcreteAgent } from "./concrete-agent";

export class ConcreteAuctioneerB implements Auctioneer {
  name = "ConcreteAuctioneerB";
  MAX_LIMIT = 15;
  subastadorNotificado = true;

  public update(agent: Agent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: El agente no es un ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: Soy el dueño... Estoy esperando`);
    }

    console.log(`${this.name}: No soy el dueño... Estoy analizando mi puja`);
    const isBid = Math.random() < 0.5;
    if (!isBid) {
      return console.log(`${this.name}: Me rindo!`);
    }
    const bid = Math.round(agent.product.precio * 1.05);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: Cantidad maxima a pujar supera el limite del subastador.`);
    }
    agent.bidUp(this, bid);
  }
}