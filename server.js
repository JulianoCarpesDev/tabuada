// vamos iniciar a pasta iniciar o npm e instalar o express
// cd + nome da pasta
// npm init -y 
// npm intsall express

// chamandop express
// instalando nodemon npm install nodemon --save-dev

// query Strings
//http:// meuSite/profiles/12345?campanha=googleads é query strings chave e valor
// ?campanha=googleads&maisalgumacoisa=coisa    


require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('conectado ao BD')
    app.emit('pronto')
}).catch((e)=>console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')


const routers = require('./routes')

const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')

const { middlewareGlobal, outroMiddleware,checkCsrfError,csrfMiddleware} = require('./src/middlewares/middleware')
// importanto os middlewares


app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'public')))

// criando as sessions
const sessionOptions = session({
    secret:'qualquer coisa aqui',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), 
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 *60 *60*24*7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))

app.set('view engine', 'ejs')


app.use(csrf())
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(outroMiddleware)
app.use(routers)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})
// para iniciar o servidor no terminal digitar node server.js ctrl c para parar
// para iniciar nodemon npm start ou nodemon e nome do server

// instalar o ejs npm install ejs

//nao esqueça de iniciar o npm i para instalar a pasta node-modules