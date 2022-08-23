function exibir(data){
    document.getElementById("myBtn").innerHTML = `<img src="${data}" />`;  
} 

function gera(){
    fetch("https://api.github.com/users/italo1033")
    .then(response => response.json()) //nesse caso ele tá tranformando os dados e retornando um json
    .then(data => {exibir(data.avatar_url)}) //passando valor para uma função
    .catch(erro => console.log(erro))// caso dé erro
}
gera();