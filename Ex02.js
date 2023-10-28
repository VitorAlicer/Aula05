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
  ]

  function obterTarefasConcluidas(tarefas) {
    const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true);
    return tarefasConcluidas;
  }
  
  const tarefasConcluidas = obterTarefasConcluidas(tarefas);
  console.log(tarefasConcluidas);

  function verificarTarefasConcluidasAbaixo30Dias(tarefas) {
    for (const tarefa of tarefas) {
      if (tarefa.concluida === true && tarefa.dias < 30) {
        return true;
      }
    }
    return false;
  }
  
  const existemTarefasConcluidasAbaixo30Dias = verificarTarefasConcluidasAbaixo30Dias(tarefas);
  
  if (existemTarefasConcluidasAbaixo30Dias) {
    console.log("Existem tarefas concluídas em menos de 30 dias.");
  } else {
    console.log("Não existem tarefas concluídas em menos de 30 dias.");
  }