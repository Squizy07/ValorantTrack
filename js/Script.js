function filtrarAgentes(categoriaSelecionada) {
    var agentes = document.getElementsByClassName("Agentes");
  
    for (var i = 0; i < agentes.length; i++) {
      var agente = agentes[i];
  
      if (categoriaSelecionada === "todos" || agente.classList.contains(categoriaSelecionada)) {
        agente.style.display = "";
      } else {
        agente.style.display = "none";
      }
    }
  }
  
  var filtroBtns = document.getElementsByClassName("filtro-btn");
  
  for (var i = 0; i < filtroBtns.length; i++) {
    filtroBtns[i].addEventListener("click", function() {
      var categoria = this.getAttribute("data-categoria");
      filtrarAgentes(categoria);
    });
  }


  
// Obtém a div "TodosAgentes" pelo ID
var divAgentes = document.getElementById("TodosAgentes");

// Obtém todos os elementos filhos da div
var agentes = divAgentes.children;

// Converte a coleção de elementos em um array para facilitar a manipulação
var agentesArray = Array.prototype.slice.call(agentes);

// Embaralha o array de agentes usando o algoritmo de Fisher-Yates
for (var i = agentesArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = agentesArray[i];
    agentesArray[i] = agentesArray[j];
    agentesArray[j] = temp;
}

// Remove todos os agentes da div
while (divAgentes.firstChild) {
    divAgentes.removeChild(divAgentes.firstChild);
}

// Adiciona os agentes embaralhados de volta à div
agentesArray.forEach(function(agente) {
    divAgentes.appendChild(agente);
});








