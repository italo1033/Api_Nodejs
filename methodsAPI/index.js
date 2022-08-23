const express=require('express');

const app= express();
app.use(express.json())
//as funções routes é justamente para onde os dados serão exibidos, assim eles vai receber o que foi colocado na url e dá um retorno
app.route("/").get((req, res) => {
    res.send("olá mundo")
})


app.route('/testePost').post((req,res) => {
    body= req.body
    res.send(body)
})


// listem é responsavel por ouvir o que você fez e manda para a porta que você designou.
app.listen('3000')




console.log("verde")