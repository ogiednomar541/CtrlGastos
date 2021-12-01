"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authcontroller = void 0;
class AuthController {
    //async
    // await db.query('INSERT INTO user set ?', [req.body])
    auth(req, res) {
        res.json({ text: 'Autehenticating credentials...*' });
        //res.send('Authenticate');
    }
    auth_Session(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let exist = false;
            const data = {};
            //const data = await db.query('SELECT mail, encrypted_pass FROM user WHERE mail = ?', req.params.mail);
            if (data.lenght < 0) {
                if (data[0][1] == req.params.pass) {
                    return res.json(data[0]);
                }
            }
            console.log(req.params.pass);
            res.status(404).json({ text: "NO SE ENCONTRÓ NINGUNA CUENTA CON EL CORREO ESPECIFICADO" });
            //res.json({text: 'Autehenticating credentials...*'});
        });
    }
}
exports.authcontroller = new AuthController();
