import { Auctioneer } from "./src/auctioneer.interface";

export class Product {
  public precio;
  public nombre;
  public auctionner: Auctioneer = null;

  constructor(product) {
    this.precio = product.precio || 10;
    this.nombre = product.nombre || "Unknown";
  }
}