const express = require('express');
const path = require('path');

const menuController = require('./menu/menu.controller');

//const setUpServer = () => {
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/templates`);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/menu', menuController.get);
app.post('/menu', menuController.post);
app.patch('/menu', menuController.patch);
app.delete('/menu', menuController.delete);

//return app;
//};

//module.expots = setUpServer;
