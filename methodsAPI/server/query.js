const express = require('express');

const app= express()

// as query são quando voce passa variaveis na propria URL
// exemplo: localhost:3000?nome=italo
// ? representa que depois daquela rota tem paramentros
// nome é a variavel
// italo o valor da variavel



app.route('/').get((req,res)=>{
    res.send(req.query); //query voce tá dizendo que quer pega as variaveis que o usuario digitou
    
    
    //exmplo do req
    //{"nome":"italo"}
    

})


//  o "/" representa mais de uma rota
//pegando em mais de uma rota
app.route('/variavel/outronome').get((req,res)=>{
    res.send(req.query)
})

app.listen("3000")