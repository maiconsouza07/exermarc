const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use('/admin', (req, res) => {
    res.send("Área adm");
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
