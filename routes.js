const express = require('express')
const rota  = express.Router()
const homeController = require('./src/controllers/homeController')
// importanto contatoControler
const contatoControler = require('./src/controllers/contatoController')

rota.get('/',homeController.paginaInicial)
rota.post('/',homeController.trataPost)

// novo controller para contato
rota.get('/contato',contatoControler.paginaInicial)

module.exports = rota