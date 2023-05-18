const form = document.getElementById("formulario_agenda");
let id = 1;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    novo_cadastro();
    id++;
});

function novo_cadastro(){

    let campo_nome = document.getElementById("campo_nome").value;
    let campo_numero = document.getElementById("campo_numero").value;
    const tabela_corpo = document.getElementById("tabela_corpo");

    var linha = document.createElement("tr");

    var conluna_id = document.createElement("td");
    conluna_id.textContent = id;
    var conluna_nome = document.createElement("td");
    conluna_nome.textContent = campo_nome;
    var conluna_numero = document.createElement("td");
    conluna_numero.textContent = campo_numero;

    linha.appendChild(conluna_id);
    linha.appendChild(conluna_nome);
    linha.appendChild(conluna_numero);

    tabela_corpo.appendChild(linha);

}