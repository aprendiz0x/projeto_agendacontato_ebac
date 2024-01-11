const form = document.getElementById('formulario-agenda');

const nomeListaContato = [];
const telListaContato = []; 

const addSucesso = '<span class="contato-adicionado add-sucesso"> CONTATO ADICIONADO COM SUCESSO </span>';

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

    setTimeout(function() {
        document.getElementById('contato-adicionado').style.display = 'none';}, 5000);

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputTelContato = document.getElementById('telefone');

    if (nomeListaContato.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já consta na lista com o telefone: ${inputTelContato.value}`);
    } else {
        nomeListaContato.push(inputNomeContato.value);
        telListaContato.push(inputTelContato.value);

        let linha ="<tr>";
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputTelContato.value} </td>`;
        linha += "</tr>";

        linhas += linha;

        document.getElementById('contato-adicionado').innerHTML = addSucesso;

        inputNomeContato.value = "";
        inputTelContato.value = "";
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}