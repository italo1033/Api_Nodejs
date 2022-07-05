// importando express
const express = require('express')
const cors = require('cors')


// configurando DATABASE
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
})


// inicializando app
const app= express();
app.use(cors());

// Definindo Porta para escuta requisições.
const port=3001;

// chamada get
app.get('/', (req, res) => {
  const track= req.query.tracking;

  if(track == 'MBC20220307' ){
    client.connect()
    client.query(`select * from track where idtracking='${track}'`)
    .then(result =>{
        const resultdo= result.rows
        res.json({resultdo})
        // console.table(resultdo);
    })
    .finally(()=> client.end())
  }
  else{
    res.json({resultdo:'Pedido inexistente em nosso banco de dados'})
    console.log('Pedido inexistente em nosso banco de dados')
  }

  })
  
// escutando a porta
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
