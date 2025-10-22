const num = document.querySelector('#fnum')
const lista = document.querySelector('#flista')
const res = document.querySelector('#res')
const valores = []

const isNumero = (n) => Number(n) > 0 && Number(n) <= 100 // Verificar se o valor é válido (é positivo e está abaixo de 100)

const inLista = (n, l) => l.indexOf(Number(n)) != -1 // Verificar se o valor está presente na lista
  
const adicionar = () => {
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

const finalizar = () => {
    if (valores.length == 0){
        alert('[ERRO] ADICIONE VALORES ANTES DE FINALIZAR')
    } else {
        let total = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]

        for (let numero of valores){
            soma += numero
            if (numero > maior)
                maior = numero
            if (numero < menor)
                menor = numero
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
