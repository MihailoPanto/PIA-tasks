"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const event_router_1 = __importDefault(require("./routers/event.router"));
// import productRouter from "./routers/product.router";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://127.0.0.1:27017/K2-2024");
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("db connection ok");
});
const router = express_1.default.Router();
router.use("/users", user_router_1.default);
router.use("/events", event_router_1.default);
app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));