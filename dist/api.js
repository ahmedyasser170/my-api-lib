"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://jsonplaceholder.typicode.com'; // Example API
const fetchData = async (endpoint) => {
    const response = await axios_1.default.get(`${API_URL}/${endpoint}`);
    return response.data;
};
exports.fetchData = fetchData;
//# sourceMappingURL=api.js.map