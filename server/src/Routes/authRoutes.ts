import { Router } from "express";

import { authcontroller } from '../Controllers/authController';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', authcontroller.auth);
        this.router.post('/:mail', authcontroller.auth_Session);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;