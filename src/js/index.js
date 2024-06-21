/** 
quando clicar no pokemon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartão do pokémon


-remover a classe "ativo" que marca o pokémon selecionado

-adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


// vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokpemons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
// - remover a classe "aberto" só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
// -ao clicar em um pokémon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao' + idPokemonSelecionado
        const cartaoPokemonParaAbrir =document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
    })
})




