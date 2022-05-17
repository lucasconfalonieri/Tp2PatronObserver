import { Agent } from "./agent.interface";
import { Auctioneer } from "./auctioneer.interface";
import { ConcreteAgent } from "./concrete-agent";

export class ConcreteAuctioneerC implements Auctioneer {
  name = "ConcreteAuctioneerC";
  MAX_LIMIT = 500;

  public update(agent: Agent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: El agente no es un ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: Soy el dueño... Estoy esperando`);
    }

    console.log(`${this.name}: No soy el dueño... Estoy pensando`);
    const isBid = Math.random() < 0.2;
    if (!isBid) {
      return console.log(`${this.name}: Yo doy mas!`);
    }
    const bid = Math.round(agent.product.precio * 1.3);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: Cantidad maxima a pujar supera el limite.`);
    }
    agent.bidUp(this, bid);
  }
}