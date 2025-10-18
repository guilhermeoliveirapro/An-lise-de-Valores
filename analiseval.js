const input = document.querySelector('#txtn') // Pega o valor digitado
const num = []  // Armazena o valor digitado
const select = document.querySelector('#val')
const res = document.querySelector('#res')


const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.res')

function adicionar(){  // Função que vai armazenar os números em num
    if (input.value.length === 0) {
        return alert("[ERRO] VALOR VAZIO, DIGITE UM VALOR");
    }
    let valor = Number(input.value)
    if (valor < 1 || valor > 100) {
        return alert("[ERRO] VALOR INVÁLIDO, DIGITE UM VALOR")
    }
    if (num.indexOf(valor) !== -1) {
        return alert("[ERRO] VALOR JÁ ADICIONADO")
    }
    let item = document.createElement('li')
    item.textContent = `VALOR ${valor} ADICIONADO`
    select.appendChild(item)
    num.push(valor)
    input.value=''
    input.focus()
}

function finalizar(){ // Função que vai finalizar e gerar os textos
    if (num.length == 0) {
        return alert('[ERRO] ADICIONE VALORES ANTES DE FINALIZAR')
    }
    
    let soma = 0
    for(let pos in num) {
        soma += num[pos]
    }
    
    let media = soma / num.length

    res.innerHTML = `
    <p>AO TODO TEMOS ${num.length} NÚMEROS CADASTRADOS NA LISTA</p>
    <p>O MAIOR VALOR INFORMADO FOI ${Math.max(...num)}</p>
    <p>O MENOR VALOR INFORMADO FOI ${Math.min(...num)}</p>
    <p>SOMANDO TODOS OS VALORES, TEMOS ${soma}</p>
    <p>A MÉDIA DOS VALORES DIGITADOS É ${media}</p>
    `
}
