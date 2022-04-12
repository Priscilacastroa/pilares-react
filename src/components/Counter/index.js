import { useState } from "react";

export function Counter() {
  // useState é uma função, essa função retorna uma ARRAY com 2 elementos
  // O primeiro elemento é o estado, o segundo elemento é uma função que altera o estado

  // Quando a gente invoca o useState, a gente pode passar uma parametro, e esse valor vai ser atribuido como o state inicial
  // Desestruturação de array
  const [estado, setEstado] = useState(0);

  function sum() {
    //A gente não pode mudar o valor de um estado DIRETAMENTE
    //Para isso, precisamos da função que muda o estado pra gente
    setEstado(estado + 1);
    console.log(estado);
  }

  return (
    <>
      <p>{estado}</p>
      <button onClick={sum}>+</button>
    </>
  );
}
