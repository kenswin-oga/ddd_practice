const express = require('express');
import { Request, Response } from 'express';
import appRoot from "app-root-path";
const app = express();

app.set('view engine', 'ejs');
app.set("views", appRoot.resolve("src/views"));

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.get('/login', (req: Request, res: Response) => {
  res.render('login');
});

app.get('/register', (req: Request, res: Response) => {
  res.render('register');
});

app.get('/profile', (req: Request, res: Response) => {
  res.render('profile');
});

module.exports = app;
