
exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'este é o valor da variavel local'
    next();
}

exports.outroMiddleware = (req, res, next) => {
next()
}
// la no erver coloca const {mesmo nome} = require('./src/middlewares/middleware')

exports.checkCsrfError = (err,req,res,next)=>{

  if (err && 'EBADCSRFTOKEN'=== err.code){
    return res.render('404')
  }
}

exports.csrfMiddleware = (req, res, next)=>{
  res.locals.csrfToken = req.csrfToken()
  // const nomecliente = res.locals.nome = req.body.cliente
  // res.locals.nome = nomecliente
  next()
}