

var tabelanomes = document.querySelector('table')
tabelanomes.addEventListener('dblclick', function (e) {
    if (e.target.parentNode.tagName != 'TR') {
        alert('Clique na célula')
        return;
    }
    e.target.parentNode.remove()
    salvar();

})

var tabelanomes = document.querySelector('table')
var botaoadd = document.querySelector('button')

botaoadd.addEventListener('click', function () {
    var inputNome = document.querySelector('input[name=nome]')
    var nome = inputNome.value
    var textNome = document.createTextNode(nome)
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(textNome)
    tr.appendChild(td)
    tabelanomes.appendChild(tr)
    inputNome.value = ''

    var inputData = document.querySelector('input[name=data]')
    var data = inputData.value
    var textData = document.createTextNode(data)
    var td = document.createElement('td')
    td.appendChild(textData)
    tr.appendChild(td)
    tabelanomes.appendChild(tr)
    inputData.value = ''

    var inputHora = document.querySelector('input[name=hora]')
    var hora = inputHora.value
    var textHora = document.createTextNode(hora)
    var td = document.createElement('td')
    td.appendChild(textHora)
    tr.appendChild(td)
    tabelanomes.appendChild(tr)
    inputHora.value = ''

    salvar();


})

