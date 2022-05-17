import { Agent } from "./agent.interface";
import { Auctioneer } from "./auctioneer.interface";
import { Product } from "./product";

export class ConcreteAgent implements Agent {
  public product: Product;
  private auctioneers: Auctioneer[] = [];

  public subscribe(auctioneer: Auctioneer): void {
    const isExist = this.auctioneers.includes(auctioneer);
    if (isExist) {
      return console.log("Agente:  el subastador ya se ha unido.");
    }

    console.log("Agente: Subastador unido.");
    this.auctioneers.push(auctioneer);
  }

  public unsubscribe(auctioneer: Auctioneer): void {
    const auctioneerIndex = this.auctioneers.indexOf(auctioneer);
    if (auctioneerIndex === -1) {
      return console.log("Agente: Subastador inexistente.");
    }

    this.auctioneers.splice(auctioneerIndex, 1);
    console.log("Agente: Subastador destacado.");
  }

  public notify(): void {
    console.log("Agente: Notificando subastador...");
    for (const auctioneer of this.auctioneers) {
      auctioneer.update(this);
    }
  }

  public bidUp(auctioneer, bid): void {
    console.log("Agente: Estoy haciendo algo importante");
    const isExist = this.auctioneers.includes(auctioneer);
    if (!isExist) {
      return console.log("Agente: El subastador no esta en el sistema.");
    }
    if (this.product.precio >= bid) {
      console.log("bid", bid);
      console.log("precio", this.product.precio);
      return console.log(`Agente: ${auctioneer.name}, bid no valido`);
    }
    this.product.precio = bid;
    this.product.auctionner = auctioneer;

    console.log(
      `Agent: El nuevo precio es ${bid} y el nuevo dueño es ${auctioneer.name}`
    );
    this.notify();
  }
}