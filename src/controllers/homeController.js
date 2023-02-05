
exports.paginaInicial = (req, res) => {
    // aqui é a chamada do index.ejs
    //const nomecliente = req.body.cliente
    res.render('index',{
        soma: '',
       // num: ''
    })
    return
}
exports.trataPost = (req, res) => {
    //const nomecliente = req.body.cliente
    if (req.body.num1 === '') return
    // if(req.body.cliente || req.body.num1 !== ''){
    //     objetos.soma = ''
    //     objetos.num = ''
    // }
 
    const numeroBody = req.body.num1
    let tabuada =    `${req.body.num1} X  ${1} = ${req.body.num1 *1}<br/>` 
                    +`${req.body.num1} X  ${2} = ${req.body.num1 *2}<br/>`
                    +`${req.body.num1} X  ${3} = ${req.body.num1 *3}<br/>`
                    +`${req.body.num1} X  ${4} = ${req.body.num1 *4}<br/>`
                    +`${req.body.num1} X  ${5} = ${req.body.num1 *5}<br/>`
                    +`${req.body.num1} X  ${6} = ${req.body.num1 *6}<br/>`
                    +`${req.body.num1} X  ${8} = ${req.body.num1 *8}<br/>`
                    +`${req.body.num1} X  ${9} = ${req.body.num1 *9}<br/>`
                    +`${req.body.num1} X ${10} = ${req.body.num1 *10}<br/>`
                   

    res.render('index',{
        soma: tabuada,
        //num: `Tabuada de ${numeroBody}`
    
    })
    //  res.send(`Bem vindo ${req.body.cliente}`)
    
    return
}