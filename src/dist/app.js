"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app_root_path_1 = __importDefault(require("app-root-path"));
const app = express();
app.set('view engine', 'ejs');
app.set("views", app_root_path_1.default.resolve("src/views"));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/profile', (req, res) => {
    res.render('profile');
});
module.exports = app;
