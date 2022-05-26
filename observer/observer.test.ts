import { boolean } from "yargs";
import { ConcreteAgent } from "./src/concrete-agent";
import { ConcreteAuctioneerA } from "./src/concrete-auctioneerA";
import { ConcreteAuctioneerB } from "./src/concrete-auctioneerB";
import { ConcreteAuctioneerC } from "./src/concrete-auctioneerC";
import { ConcreteAuctioneerD } from "./src/concrete-auctioneerD";
import { Product } from "./src/product";


test('Cuando_SeCreaProduct_Deberia_CrearseConNombreYPrecioYSinDueño', () => {
    const diamond = new Product({ nombre: "Diamante", precio: 5 });
    expect(diamond.nombre).toEqual("Diamante");
    expect(diamond.precio).toBe(5);
    expect(diamond.auctionner).toBeNull();
});

test('Cuando_SeCreaUnAuctioneer_Deberia_PoseerNombreYLimiteDePuja', () => {
    const auctioneerA = new ConcreteAuctioneerA();
    expect(auctioneerA.name).toEqual("ConcreteAuctioneerA");
    expect(auctioneerA.MAX_LIMIT).toBe(100);
}); 

test('Cuando_SeCreaConcreteAgent_Deberia_PoseerSubastadoresYUnProducto', () => {
    const concreteAgent = new ConcreteAgent();
    expect.arrayContaining(concreteAgent.auctioneers);
    const diamond = new Product({ nombre: "Diamante", precio: 5 });
    concreteAgent.product = diamond;
    expect(concreteAgent.product.nombre).toEqual("Diamante");
    expect(concreteAgent.product.precio).toBe(5);
}); 

test('Cuando_Subscribe_Deberia_AgregarUnSubastadorALosSubastadores', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerA = new ConcreteAuctioneerA();
    concreteAgent.subscribe(auctioneerA);
    expect(concreteAgent.auctioneers[0]).toBe(auctioneerA);
}); 

test('Cuando_BidUp_Deberia_RealizarUnaOfertaDelSubastadorSeleccionado', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerA = new ConcreteAuctioneerA();
    concreteAgent.subscribe(auctioneerA);
    const diamond = new Product({ name: "Diamante", price: 5 });
    concreteAgent.product = diamond;
    concreteAgent.bidUp(auctioneerA, 5);
    expect(concreteAgent.ofertado).toBe(1);
}); 

