const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@mongodb-robs-womj6.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, }
);

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333.');
});
