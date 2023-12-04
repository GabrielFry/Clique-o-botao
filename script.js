let count = 0;
let highest = localStorage.getItem("highest") || 0;
let btn = document.getElementById("button-click");
let disp = document.getElementById("display");
let highestDisplay = document.getElementById("highest");

  btn.addEventListener("click", function () {
      count++;
      disp.innerHTML = count;

      // Gera um número aleatório entre 0 e 1
      let random = Math.random();

      // Se o número aleatório for menor que 0.01 (1% de chance)
      if (random < 0.10) {
          // Reseta o contador
          count = 0;
          disp.innerHTML = count;
      }

      // Atualiza o maior registro de cliques se o contador for maior que o registro atual
      if (count > highest) {
          highest = count;
          localStorage.setItem("highest", highest);
      }

      // Atualiza a exibição do maior registro de cliques
      highestDisplay.innerHTML = highest;
  });