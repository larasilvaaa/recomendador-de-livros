let livros = [
  { nome: "O Pequeno Príncipe", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "Harry Potter e a Pedra Filosofal", idade: 10, categorias: ["fantasia", "aventura"] },
  { nome: "A Menina que Roubava Livros", idade: 12, categorias: ["drama"] },
  { nome: "O Hobbit", idade: 10, categorias: ["fantasia", "aventura"] },
  { nome: "1984", idade: 16, categorias: ["drama", "distopia"] },
  { nome: "Dom Casmurro", idade: 14, categorias: ["drama"] }
];

let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let livrosRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de livros de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de livros de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de livros de drama? (sim/não)").toLowerCase() === "sim";

  // Filtrar recomendações
  for (let livro of livros) {
    if (idadeUsuario >= livro.idade) {
      if (
        (gostaFantasia && livro.categorias.includes("fantasia")) ||
        (gostaAventura && livro.categorias.includes("aventura")) ||
        (gostaDrama && livro.categorias.includes("drama"))
      ) {
        livrosRecomendados.push(livro.nome);
      }
    }
  }

  // Exibir recomendações
  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, 70);
    for (let i = 0; i < livrosRecomendados.length; i++) {
      text("- " + livrosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum livro disponível para sua idade e preferências.", 20, 70);
  }
}
