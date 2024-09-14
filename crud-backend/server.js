const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


let itens = [];

// Rotas da API
app.get('/api/itens', (req, res) => {
    res.json(itens);
});

app.post('/api/itens', (req, res) => {
    const novoItem = req.body;
    itens.push(novoItem);
    res.json(novoItem);
});

app.put('/api/itens/:id', (req, res) => {
    const itemId = req.params.id;
    const itemAtualizado = req.body;
    itens = itens.map(item => 
        item.id === itemId ? itemAtualizado : item
    );
    res.json(itemAtualizado);
});

app.delete('/api/itens/:id', (req, res) => {
    const itemId = req.params.id;
    itens = itens.filter(item => item.id !== itemId);
    res.json({ message: 'Item deletado' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});