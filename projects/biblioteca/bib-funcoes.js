import { bib } from './bib.js'

let a = (document.querySelector('tbody').rows.length) - 1;
function init () {
  a = (document.querySelector('tbody').rows.length) - 1;
}
document.addEventListener('DOMContentLoaded', init);

document.querySelector('div.biblioteca').addEventListener('click', (e) => {
  let target = e.target;
  if (target.parentElement.id === 'classificacao') {
    if(target.className === 'e1 fa fa-star-o'){
      target.className = 'e1 fa fa-star';
      bib.filmes[a].avaliacao = 1;
      console.log('funciona?')
    }
    if(target.className === 'e2 fa fa-star-o'){
      target.parentElement.children[0].className = 'e1 fa fa-star';
      target.className = 'e2 fa fa-star';
      bib.filmes[a].avaliacao = 2;
    }
    if(target.className === 'e3 fa fa-star-o'){
      target.parentElement.children[0].className = 'e1 fa fa-star';
      target.parentElement.children[1].className = 'e2 fa fa-star';
      target.className = 'e3 fa fa-star';
      bib.filmes[a].avaliacao = 3;
    }
    if(target.className === 'e4 fa fa-star-o'){
      target.parentElement.children[0].className = 'e1 fa fa-star';
      target.parentElement.children[1].className = 'e2 fa fa-star';
      target.parentElement.children[2].className = 'e3 fa fa-star';
      target.className = 'e4 fa fa-star';
      bib.filmes[a].avaliacao = 4;
    }
    if(target.className === 'e5 fa fa-star-o'){
      target.parentElement.children[0].className = 'e1 fa fa-star';
      target.parentElement.children[1].className = 'e2 fa fa-star';
      target.parentElement.children[2].className = 'e3 fa fa-star';
      target.parentElement.children[3].className = 'e4 fa fa-star';
      target.className = 'e5 fa fa-star';
      bib.filmes[a].avaliacao = 5;
    }
  }
  if(target.id === 'favorito') {
    if (target.className === 'favorito fa fa-heart-o') {
      target.className = 'favorito fa fa-heart';
      bib.filmes[a].favorito = true;
    } else {
      target.className = 'favorito fa fa-heart-o';
      bib.filmes[a].favorito = false;
    }
  }
  if (target.id === 'status'){
    if (target.className === 'btn btn-outline-dark') {
      target.className = 'btn btn-outline-warning';
      target.textContent = 'Em andamento';
    } else if (target.className === 'btn btn-outline-warning') {
      target.className = 'btn btn-outline-success';
      target.textContent = 'Assistido';
    } else {
      target.className = 'btn btn-outline-dark';
      target.textContent = 'Na fila';
    }
  }
});
