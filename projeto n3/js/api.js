const cachorro = document.getElementById("cachorro")

function requisicaoApi(){

    const api = fetch("https://random.dog/woof.json", {
        method: 'GET'
    }).then(dados=> dados.json())
    .then(dados=>cachorro.src=dados.url);

}

requisicaoApi();