const express = require('express');
const app = express();
const port = 3000; // Define a porta do servidor

let users = [];
let products = [];

/////////////////////////////////////////////
// Usuarios
cria();


app.get('/users', (req, res) => {
    res.status(200);
    res.json(users);
    
});
app.get('/users/:id', (req, res) => {
    const id =  Number.parseInt(req.params.id);
    const finduser = users.find(users => users.id === id);
    const index = users.findIndex(users => users.id === id);    
    if (index != -1){
        res.status(200)
        res.json(finduser)
    }else{
        res.status(404).send("Usuario não encontrado");
    }
    
});
app.delete('/users/:id', (req, res) => {
    const id =  Number.parseInt(req.params.id);
    const index = users.findIndex(users => users.id === id);
    if (index != -1){
        users.splice (index,1);
        res.status(200).send("Usuario deletado com sucesso encontrado");
    }else{
        res.status(404).send("Usuario não encontrado");
    }    
    
});


app.post('/users', (req, res) => {
    const { name, cpf, email } = req.body;
    console.log(nome)
});



// let headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     "Content-Type": "application/json"
//    }
   
//    let bodyContent = JSON.stringify({
//      "id": "47",
//      "name": "Nome",
//      "cpf": "cpf",
//      "email": "email"
//    });
   
//    let response = await fetch("http://localhost:3000/users", { 
//      method: "POST",
//      body: bodyContent,
//      headers: headersList
//    });
   
//    let data = await response.text();
//    console.log(data);
   




//Rota post /users
//Rota put /users

/////////////////////////////////////////////
// Produtos

app.get('/products', (req, res) => {
    res.status(200);
    res.json(products);
    
});
app.get('/products/:id', (req, res) => {
    const id =  Number.parseInt(req.params.id);
    const findproducts = products.find(products => products.id === id);
    const index = products.findIndex(products => products.id === id);    
    if (index != -1){
        res.status(200)
        res.json(findproducts)
    }else{
        res.status(404).send("Produto não encontrado");
    }
    
});
app.delete('/products/:id', (req, res) => {
    const id =  Number.parseInt(req.params.id);
    const index = products.findIndex(products => products.id === id);
    if (index != -1){
        products.splice (index,1);
        res.status(200).send("Produto deletado com sucesso encontrado");
    }else{
        res.status(404).send("Produto não encontrado");
    }    
    
});

//Rota post /products
//Rota put /products

  
app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
});

function verificaNome(nome){
    if(nome.length<3){
        return("'Nome' deve conter no mínimo 3 caracteres")
    }else{
        if(nome.length>150){
            return("'Nome' deve conter no máximo 150 caracteres")
        }else{
            return(nome)            
        }
    }
}

function cria(){
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })
    users.push({ "id": users.length+1,"name": "Nome", "cpf": "cpf", "email": "email" })


    products.push({ "id": products.length+1,"name": "Nome", "price": 0.0 })
    products.push({ "id": products.length+1,"name": "Nome", "price": 0.0 })
}