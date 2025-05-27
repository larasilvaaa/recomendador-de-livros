let campoIdade, campoFantasia;

function setup() {
  createCanvas(800, 400);

  // 🔵 Rótulo e campo para idade
  createSpan("Sua idade: ");
  campoIdade = createInput("10");

  createSpan("   "); // Espaço entre elementos

  // 🔵 Checkbox com descrição
  campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
  background("#FCE202"); // ⚪ Fundo branco

  let idade = int(campoIdade.value()); // Converte idade para número
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

  fill(color(76, 0, 115)); // 🟣 Cor do texto
  textAlign(CENTER, CENTER); // 🎯 Centralizado
  textSize(32); // 🔠 Tamanho do texto
  text(recomendacao, width / 2, height / 2); // 📍 Exibe recomendação no centro
}

function geraRecomendacao(idade, gostaDeFantasia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "📖 O Sol é Para Todos – Harper Lee";
    } else {
      if (gostaDeFantasia) {
        return "📘 Percy Jackson e os Olimpianos – Rick Riordan";
      } else {
        return "📗 Extraordinário – R.J. Palacio";
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "📙 Harry Potter e a Pedra Filosofal – J.K. Rowling";
    } else {
      return "📕 O Pequeno Príncipe – Antoine de Saint-Exupéry";
    }
  }
}
