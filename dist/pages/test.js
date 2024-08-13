"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const home_1 = __importDefault(require("./home"));
const MyTestPage = () => {
    return (0, jsx_runtime_1.jsxs)("div", { children: [" Welcome to my test module page with Next.js!", (0, jsx_runtime_1.jsx)(home_1.default, {})] });
};
exports.default = MyTestPage;
//# sourceMappingURL=test.js.map