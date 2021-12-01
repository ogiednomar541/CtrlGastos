"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../Controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', authController_1.authcontroller.auth);
        this.router.post('/:mail', authController_1.authcontroller.auth_Session);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
