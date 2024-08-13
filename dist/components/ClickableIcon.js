"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const ClickableIcon = ({ params }) => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: params.onClick, children: (0, jsx_runtime_1.jsx)(image_1.default, { src: params.image, alt: 'icon', width: params.width, height: params.height }) }));
};
exports.default = ClickableIcon;
//# sourceMappingURL=ClickableIcon.js.map