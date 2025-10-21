const num = document.querySelector('#fnum')
const lista = document.querySelector('#flista')
const res = document.querySelector('#res')
const valores = []

function isNumero(n){
    return Number(num.value) > 0 && Number(num.value) <= 100
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} inserido`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert('[ERRO] VALOR INSERIDO É INVÁLIDO OU ESTÁ PRESENTE NA LISTA')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('[ERRO] ADICIONE VALORES ANTES DE FINALIZAR')
    } else {
        let total = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        
        for(let pos in valores) {
            soma += valores[pos]
            
            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>${total} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
