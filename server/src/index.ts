import express, {Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './Routes/indexRoutes';
import authRoutes from './Routes/authRoutes';

class Server {

    app: Application;

    constructor(){
        this.app = express();
        //Configurar app
        this.config(); 
        this.routes();
    }

    //Configurar la propiedad app
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //define las rutas en el server
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/auth', authRoutes);
    }

    //Inicializar servidor app.listen
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port: ', this.app.get('port'));
        });
    }

}

//Guardar objeto devuelto por start() e iniciar server
const server = new Server();
server.start();