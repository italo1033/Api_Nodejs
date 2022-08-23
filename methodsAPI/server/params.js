const express = require('express');

const app= express()

app.route('/').get((req,res)=>{
    res.send("olá mundo");
})

//pegando parametro
//para pega parametro tem que colocar :nomeDoParametro
app.route('/:variavel').get((req,res)=>{
    //o params significa que tá pegando os parametros da url
    res.send(req.params.variavel) //o nome depois do parames é correspondente ao que voce colocou na rota
})


//  o "/" representa mais de uma rota
app.route('/:variavel/:outronome').get((req,res)=>{
    res.send(req.params.outronome)
})

app.listen("3000")