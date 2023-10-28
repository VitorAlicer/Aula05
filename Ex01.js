const filmes = [
    {
      "nome": "O Labirinto do Fauno",
      "lancamento": 2006,
      "diretores": ["Guillermo del Toro"],
      "generos": ["Fantasia"]
    },
    {
      "nome": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
      "lancamento": 2005,
      "diretores": ["Andrew Adamson"],
      "generos": ["Fantasia", "Aventura"]
    },
    {
      "nome": "Indiana Jones e os Caçadores da Arca Perdida",
      "lancamento": 1981,
      "diretores": ["Steven Spielberg"],
      "generos": ["Aventura"]
    },
    {
      "nome": "Jurassic Park: Parque dos Dinossauros",
      "lancamento": 1993,
      "diretores": ["Steven Spielberg"],
      "generos": ["Aventura"]
    },
    {
      "nome": "Mad Max: Estrada da Fúria",
      "lancamento": 2015,
      "diretores": ["George Miller"],
      "generos": ["Ação"]
    },
    {
      "nome": "Duro de Matar",
      "lancamento": 1988,
      "diretores": ["John McTiernan"],
      "generos": ["Ação"]
    },
    {
      "nome": "Blade Runner: O Caçador de Androides",
      "lancamento": 1982,
      "diretores": ["Ridley Scott"],
      "generos": ["Ficção Científica"]
    },
    {
      "nome": "Interstellar",
      "lancamento": 2014,
      "diretores": ["Christopher Nolan"],
      "generos": ["Ficção Científica"]
    },
    {
      "nome": "O Senhor do Aneis: A Sociedade do Anel",
      "lancamento": 2002,
      "diretores": ["Peter Jackson"],
      "generos": ["Fantasia", "Aventura"]
    },
    {
      "nome": "Harry Potter e a Pedra Filosofal",
      "lancamento": 2001,
      "diretores": ["Chris Columbus"],
      "generos": ["Fantasia"],
    },
    {
      "nome": "Matrix",
      "lancamento": 1999,
      "diretores": ["Lana Wachowski", "Lilly Wachowski"],
      "generos": ["Ação", "Ficção Cientifica"]
    }
  ]



function filtrarNomeAno(filmes) {
  const resultado = [];

  filmes.forEach(filme => {
    const { nome, lancamento } = filme;
    resultado.push({ título: nome, anoLançamento: lancamento });
  });
  
  return resultado;
}

const nomeEAnos = filtrarNomeAno(filmes);
console.log(nomeEAnos);

function adicionarId(filmes) {
    let idIncremental = 1;
  
    filmes.forEach(filme => {
      filme.id = idIncremental;
      idIncremental++;
    });
  
    return filmes;
  }
  
  const filmesComIds = adicionarId(filmes);
  console.log(filmesComIds);

 // function filtrarFantasia(filmes) {
  //  const filmesFantasia = filmes.filter(filme => {
  //    return filme.generos.includes("Fantasia");
   // });
  
  //  return filmesFantasia;
  //}
  
  //const filmesFantasia = filtrarFantasia(filmes);
  //console.log(filmesFantasia);

  function filtrarAcaoFiccao(filmes) {
    const filmesAcaoFiccao = filmes.filter(filme => {
        return filme.generos.includes("Ação") && filme.generos.includes("Ficção Científica");
      });
      return filmesAcaoFiccao;
    }
    
  
    const filmesAcaoFiccao = filtrarAcaoFiccao(filmes);
    console.log(filmesAcaoFiccao);