const botao = document.getElementById("btnComprar");

botao.addEventListener("click", () => {

    alert("Obrigado pelo interesse! Em breve você conhecerá nossos produtos.");

});

async function buscarCEP(){

const cep = document.getElementById("cepInput").value;

const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

const dados = await resposta.json();

document.getElementById("resultado").innerHTML =

`
Cidade: ${dados.localidade}<br>
Estado: ${dados.uf}<br>
Bairro: ${dados.bairro}
`;

}