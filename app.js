'use strict'

const funcionarios = [
    {
        nome: 'Maria Souza',
        cargo: 'Designer',
        imagem: 'maria.jpg'
    },
    {
        nome: 'João Silva',
        cargo: 'DBA',
        imagem: 'joao.jpg'
    },
    {
        nome: 'Hugo Pereira',
        cargo: 'Front End',
        imagem: 'hugo.jpg'
    },
    {
        nome: 'Ana Maria',
        cargo: 'Back End',
        imagem: 'ana.jpg'
    },
]

const criarCard = (funcionarios) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionarios.imagem}`
    imagem.alt = funcionarios.nome

    const nome = document.createElement('h3')
    nome.textContent = funcionarios.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(cargo)

    return card
}

const mostrarCards = (funcionarios) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionarios)
    cardContainer.appendChild(card)
}

funcionarios.forEach(mostrarCards)
