const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3333;
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Servidor sprinteando en el puerto: ' + PORT));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

