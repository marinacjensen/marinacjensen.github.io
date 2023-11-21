const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const capa = this.capa.value;
  const ano = this.ano.value;
  const nome = this.nome.value;
  const diretor = this.diretor.value;
  const link = this.link.value;

  const row = `<tr>`
    + `<td>
          <img src="${capa}" style="width: 50px;">
          </td>`
    + `<td>
          <a href="${link}">${nome} </a><i class="favorito fa fa-heart-o" aria-hidden="true" id="favorito"></i>
        </td>`
    + `<td>${ano}</td>`
    + `<td>${diretor}</td>`
    + `<td id = 'classificacao'>
        <i class="e1 fa fa-star-o" aria-hidden="true"></i>
        <i class="e2 fa fa-star-o" aria-hidden="true"></i>
        <i class="e3 fa fa-star-o" aria-hidden="true"></i>
        <i class="e4 fa fa-star-o" aria-hidden="true"></i>
        <i class="e5 fa fa-star-o" aria-hidden="true"></i>
          </td>`
    + `<td>
            <button class="btn btn-outline-dark" id="status">
              Na Fila
            </button>
          </td></tr>`;
  tbody.innerHTML = tbody.innerHTML + row;
  e.preventDefault();
  form.reset();
});
