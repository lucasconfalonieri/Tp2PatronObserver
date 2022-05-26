"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(product) {
        this.auctionner = null;
        this.precio = product.precio || 10;
        this.nombre = product.nombre || "Unknown";
    }
    return Product;
}());
exports.Product = Product;
