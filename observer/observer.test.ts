import { boolean } from "yargs";
import { ConcreteAgent } from "./src/concrete-agent";
import { ConcreteAuctioneerA } from "./src/concrete-auctioneerA";
import { ConcreteAuctioneerB } from "./src/concrete-auctioneerB";
import { ConcreteAuctioneerC } from "./src/concrete-auctioneerC";
import { ConcreteAuctioneerD } from "./src/concrete-auctioneerD";
import { Product } from "./src/product";


test('1_Cuando_SeCreaProduct_Deberia_CrearseConNombreYPrecioYSinDueño', () => {
    const diamond = new Product({ nombre: "Diamante", precio: 4 });
    expect(diamond.nombre).toEqual("Diamante");
    expect(diamond.precio).toBe(4);
    expect(diamond.auctionner).toBeNull();
});

test('2_Cuando_SeCreaUnAuctioneer_Deberia_PoseerNombreYLimiteDePuja', () => {
    const auctioneerA = new ConcreteAuctioneerA();
    expect(auctioneerA.name).toEqual("ConcreteAuctioneerA");
    expect(auctioneerA.MAX_LIMIT).toBe(10);
}); 

test('3_Cuando_SeCreaConcreteAgent_Deberia_PoseerSubastadoresYUnProducto', () => {
    const concreteAgent = new ConcreteAgent();
    expect.arrayContaining(concreteAgent.auctioneers);
    const diamond = new Product({ nombre: "Diamante", precio: 4 });
    concreteAgent.product = diamond;
    expect(concreteAgent.product.nombre).toEqual("Diamante");
    expect(concreteAgent.product.precio).toBe(4);
}); 

test('4_Cuando_Subscribe_Deberia_AgregarUnSubastadorALosSubastadores', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerB = new ConcreteAuctioneerB();
    concreteAgent.subscribe(auctioneerB);
    expect(concreteAgent.auctioneers[0]).toBe(auctioneerB);
}); 

test('5_Cuando_BidUp_Deberia_RealizarUnaOfertaDelSubastadorSeleccionado', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerC = new ConcreteAuctioneerC();
    concreteAgent.subscribe(auctioneerC);
    const diamond = new Product({ name: "Diamante", price: 5 });
    concreteAgent.product = diamond;
    concreteAgent.bidUp(auctioneerC, 5);
    expect(concreteAgent.ofertado).toBeTruthy();
}); 

test('6_Cuando_Unsubscribe_Deberia_QuitarAlSubastadorDeLosSubastadores', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerD = new ConcreteAuctioneerD();
    concreteAgent.subscribe(auctioneerD);
    concreteAgent.unsubscribe(auctioneerD);
    expect(concreteAgent.auctioneers.length).toBe(0);
});

test('7_Cuando_Update_Deberia_ActualizarACadaSubastadorElEstadoDelProducto', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerC = new ConcreteAuctioneerC();
    concreteAgent.subscribe(auctioneerC);
    const diamond = new Product({ name: "Diamante", price: 5 });
    concreteAgent.product = diamond;
    concreteAgent.bidUp(auctioneerC, 5);
    expect(auctioneerC.subastadorNotificado).toBeTruthy();
}); 

test('8_Cuando_Notify_Deberia_NotificarATodosLosSubastadoresSubscriptos', () => {
    const concreteAgent = new ConcreteAgent();
    const auctioneerC = new ConcreteAuctioneerC();
    concreteAgent.subscribe(auctioneerC);
    const diamond = new Product({ name: "Diamante", price: 5 });
    concreteAgent.product = diamond;
    concreteAgent.bidUp(auctioneerC, 5);
    expect(concreteAgent.notificados).toBeTruthy();
}); 




