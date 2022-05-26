"use strict";
exports.__esModule = true;
exports.ConcreteAuctioneerD = void 0;
var concrete_agent_1 = require("./concrete-agent");
var ConcreteAuctioneerD = /** @class */ (function () {
    function ConcreteAuctioneerD() {
        this.name = "ConcreteAuctioneerD";
        this.MAX_LIMIT = 1000;
    }
    ConcreteAuctioneerD.prototype.update = function (agent) {
        if (!(agent instanceof concrete_agent_1.ConcreteAgent)) {
            throw new Error("ERROR: El agente no es un ConcreteAgent");
        }
        if (agent.product.auctionner === this) {
            return console.log("".concat(this.name, ": Soy el due\u00F1o... Estoy esperando"));
        }
        console.log("".concat(this.name, ": No soy el due\u00F1o... Estoy pensando"));
        var isBid = Math.random() < 0.8;
        if (!isBid) {
            return console.log("".concat(this.name, ": Yo doy mas!"));
        }
        var bid = Math.round(agent.product.precio * 1.2);
        if (bid > this.MAX_LIMIT) {
            return console.log("".concat(this.name, ": Cantidad maxima a pujar supera el limite."));
        }
        agent.bidUp(this, bid);
    };
    return ConcreteAuctioneerD;
}());
exports.ConcreteAuctioneerD = ConcreteAuctioneerD;
