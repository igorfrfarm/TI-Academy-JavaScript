import { listarProdutos } from './listarProdutos.js';

window.onload = function() {    
    const produtos = document.querySelector('#produtos'); 
    let listaProdutos = [
        {
            'produto': 'Morango',
            'preco': 1.20
        },
        {
            'produto': 'Abacaxi',
            'preco': 3.20
        },
        {
            'produto': 'Laranja',
            'preco': 2.50
        },
        {
            'produto': 'Melão',
            'preco': 4.60
        },
        {
            'produto': 'Melancia',
            'preco': 5.60
        }
    ];

    listarProdutos(listaProdutos, produtos);    
}