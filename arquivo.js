var tamanho = prompt('Qual tamanho da lista')
for (let c = 0; c < tamanho; c++) {
  var item = document.createElement("LI");
  var texto = document.createTextNode("item");
  item.appendChild(texto);
  document.getElementById("lista").appendChild(item);
}

