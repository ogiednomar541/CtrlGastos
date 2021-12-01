import {Request, Response} from 'express'

import db from '../database';

class AuthController {
    //async
    // await db.query('INSERT INTO user set ?', [req.body])
    public auth (req: Request, res: Response){
        res.json({text: 'Autehenticating credentials...*'});
        //res.send('Authenticate');
    }
 
    public async auth_Session (req: Request, res: Response): Promise<any>{
        let exist: boolean = false;

        const data: any = {};
        //const data = await db.query('SELECT mail, encrypted_pass FROM user WHERE mail = ?', req.params.mail);
        if (data.lenght < 0) {
            if (data[0][1] == req.params.pass){
                return res.json(data[0]);
            }
        }
        console.log(req.params.pass);
        res.status(404).json({text : "NO SE ENCONTRÓ NINGUNA CUENTA CON EL CORREO ESPECIFICADO"});
        //res.json({text: 'Autehenticating credentials...*'});
    }
}

export const authcontroller = new AuthController();