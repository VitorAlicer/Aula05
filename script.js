const tarefas = [
    {
      titulo: 'Passear com o cachorro',
      concluida: false,
      dias: 10,
    },
    {
      titulo: 'Comprar leite',
      concluida: false,
      dias: 5,
    },
    {
      titulo: 'Lavar louça',
      concluida: true,
      dias: 60,
    }
  ];
  
  const tarefasLista = document.getElementById('tarefas-lista');
  
  function exibirTarefasNaoConcluidas(tarefas) {
      tarefasLista.innerHTML = ''; // Limpa a lista de tarefas
  
      tarefas.forEach(tarefa => {
          if (!tarefa.concluida) {
              const li = document.createElement('li');
              li.textContent = tarefa.titulo;
              tarefasLista.appendChild(li);
          }
      });
  }
  
  exibirTarefasNaoConcluidas(tarefas);
  