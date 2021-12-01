"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./Routes/indexRoutes"));
const authRoutes_1 = __importDefault(require("./Routes/authRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //Configurar app
        this.config();
        this.routes();
    }
    //Configurar la propiedad app
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //define las rutas en el server
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/auth', authRoutes_1.default);
    }
    //Inicializar servidor app.listen
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port: ', this.app.get('port'));
        });
    }
}
//Guardar objeto devuelto por start() e iniciar server
const server = new Server();
server.start();
