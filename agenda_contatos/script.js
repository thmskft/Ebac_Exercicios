const form = document.getElementById('form-contacts');
const contactsName = [];
const contactsPhone = [];

let linhas = '';

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const contactName = document.getElementById('contact-name');
    const contactPhone = document.getElementById('contact-phone');

    if (contactsName.includes(contactName.value) || contactsPhone.includes(contactPhone.value)) {
        alert(`Name or phone already exists in contact list`);
    } else {
        contactsName.push(contactName.value);
        contactsPhone.push(contactPhone.value);

        let linha = '<tr>';
        linha += `<td>${contactName.value}</td>`;
        linha += `<td>${contactPhone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    contactName.value = '';
    contactPhone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas;
}
