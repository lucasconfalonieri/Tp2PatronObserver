"use strict";
exports.__esModule = true;
exports.ConcreteAuctioneerA = void 0;
var concrete_agent_1 = require("./concrete-agent");
var ConcreteAuctioneerA = /** @class */ (function () {
    function ConcreteAuctioneerA() {
        this.name = "ConcreteAuctioneerA";
        this.MAX_LIMIT = 100;
    }
    ConcreteAuctioneerA.prototype.update = function (agent) {
        if (!(agent instanceof concrete_agent_1.ConcreteAgent)) {
            throw new Error("ERROR: El agente no es un ConcreteAgent");
        }
        if (agent.product.auctionner === this) {
            return console.log("".concat(this.name, ": Soy el due\u00F1o... Estoy esperando"));
        }
        console.log("".concat(this.name, ": No soy el due\u00F1o... Estoy pensando"));
        var bid = Math.round(agent.product.precio * 1.1);
        if (bid > this.MAX_LIMIT) {
            return console.log("".concat(this.name, ": Cantidad maxima a pujar supera el limite."));
        }
        agent.bidUp(this, bid);
    };
    return ConcreteAuctioneerA;
}());
exports.ConcreteAuctioneerA = ConcreteAuctioneerA;
