"use strict";
exports.__esModule = true;
exports.ConcreteAgent = void 0;
var ConcreteAgent = /** @class */ (function () {
    function ConcreteAgent() {
        this.auctioneers = [];
    }
    ConcreteAgent.prototype.subscribe = function (auctioneer) {
        var isExist = this.auctioneers.includes(auctioneer);
        if (isExist) {
            return console.log("Agente:  el subastador ya se ha unido.");
        }
        console.log("Agente: Subastador unido.");
        this.auctioneers.push(auctioneer);
    };
    ConcreteAgent.prototype.unsubscribe = function (auctioneer) {
        var auctioneerIndex = this.auctioneers.indexOf(auctioneer);
        if (auctioneerIndex === -1) {
            return console.log("Agente: Subastador inexistente.");
        }
        this.auctioneers.splice(auctioneerIndex, 1);
        console.log("Agente: Subastador destacado.");
    };
    ConcreteAgent.prototype.notify = function () {
        console.log("Agente: Notificando subastador...");
        for (var _i = 0, _a = this.auctioneers; _i < _a.length; _i++) {
            var auctioneer = _a[_i];
            auctioneer.update(this);
        }
    };
    ConcreteAgent.prototype.bidUp = function (auctioneer, bid) {
        console.log("Agente: Estoy haciendo algo importante");
        var isExist = this.auctioneers.includes(auctioneer);
        if (!isExist) {
            return console.log("Agente: El subastador no esta en el sistema.");
        }
        if (this.product.precio >= bid) {
            console.log("bid", bid);
            console.log("precio", this.product.precio);
            return console.log("Agente: ".concat(auctioneer.name, ", bid no valido"));
        }
        this.product.precio = bid;
        this.product.auctionner = auctioneer;
        console.log("Agent: El nuevo precio es ".concat(bid, " y el nuevo due\u00F1o es ").concat(auctioneer.name));
        this.notify();
    };
    return ConcreteAgent;
}());
exports.ConcreteAgent = ConcreteAgent;
