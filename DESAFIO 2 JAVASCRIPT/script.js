import { buscaCEP } from './buscaCEP.js';

let cep = document.querySelector('#input-cep');
let searchBtn = document.querySelector('#input-search');

searchBtn.addEventListener('click', function() {
    buscaCEP(cep.value);
});