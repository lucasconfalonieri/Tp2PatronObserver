import { ConcreteAgent } from "./src/concrete-agent";
import { ConcreteAuctioneerA } from "./src/concrete-auctioneerA";
import { ConcreteAuctioneerB } from "./src/concrete-auctioneerB";
import { ConcreteAuctioneerC } from "./src/concrete-auctioneerC";
import { ConcreteAuctioneerD } from "./src/concrete-auctioneerD";
import { Product } from "./src/product";

const concreteAgent = new ConcreteAgent();

const auctioneerA = new ConcreteAuctioneerA();
const auctioneerB = new ConcreteAuctioneerB();
const auctioneerC = new ConcreteAuctioneerC();
const auctioneerD = new ConcreteAuctioneerD();

concreteAgent.subscribe(auctioneerA);
concreteAgent.subscribe(auctioneerB);
concreteAgent.subscribe(auctioneerC);
concreteAgent.subscribe(auctioneerD);

const diamond = new Product({ name: "Diamante", price: 5 });
concreteAgent.product = diamond;

concreteAgent.bidUp(auctioneerA, 10);

console.log("--------- Nueva subasta -----------");

concreteAgent.unsubscribe(auctioneerD);

const gem = new Product({ name: "Gema", price: 3 });
concreteAgent.product = gem;

concreteAgent.bidUp(auctioneerB, 5);

console.log(`El ganador de la subasta es 
             Producto: ${diamond.nombre}
             Nombre: ${diamond.auctionner.name}
             Precio: ${diamond.precio}`);

console.log(`El ganador de la subasta es  
             Producto: ${gem.nombre}
             Nombre: ${gem.auctionner.name}
             Precio: ${gem.precio}`);