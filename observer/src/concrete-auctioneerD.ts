import { Agent } from "../interfaces/agent.interface";
import { Auctioneer } from "../interfaces/auctioneer.interface";
import { ConcreteAgent } from "./concrete-agent";

export class ConcreteAuctioneerD implements Auctioneer {
  name = "ConcreteAuctioneerD";
  MAX_LIMIT = 1000;

  public update(agent: Agent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: El agente no es un ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: Soy el dueño... Estoy esperando`);
    }

    console.log(`${this.name}: No soy el dueño... Estoy analizando`);
    const isBid = Math.random() < 0.8;
    if (!isBid) {
      return console.log(`${this.name}: Yo doy mas!`);
    }
    const bid = Math.round(agent.product.precio * 1.2);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: Cantidad maxima a pujar supera el limite.`);
    }
    agent.bidUp(this, bid);
  }
}