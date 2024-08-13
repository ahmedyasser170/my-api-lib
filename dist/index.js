"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickableIcon = exports.MyHomePage = exports.fetchData = void 0;
var api_1 = require("./api");
Object.defineProperty(exports, "fetchData", { enumerable: true, get: function () { return api_1.fetchData; } });
var home_1 = require("./pages/home");
Object.defineProperty(exports, "MyHomePage", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
var ClickableIcon_1 = require("./components/ClickableIcon");
Object.defineProperty(exports, "ClickableIcon", { enumerable: true, get: function () { return __importDefault(ClickableIcon_1).default; } });
//# sourceMappingURL=index.js.map