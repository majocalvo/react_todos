import React, { useState } from "react";
import "./App.css";
import Title from "./componente/Title";

function App() {
  const [gastos, setGastos] = useState([]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Title />
          <Contador gastos_in={gastos} />
          <GastosMes gastos_in={gastos} />
          <AgregarGasto setGastos_in={setGastos} />
          <Transacciones gastos_in={gastos} />
        </header>
      </div>
    </>
  );
}

function Contador({ gastos_in }) {
  let total = 0;

  for (let i = 0; i < gastos_in.length; i++) {
    total += gastos_in[i];
  }

  return (
    <div>
      <div className="gasto_mensual">Gasto mensual: $ {total} </div>
    </div>
  );
}

function GastosMes({ gastos_in }) {
  return (
    <ul>
      {gastos_in.map((gasto) => (
        // <li key={gasto}>{gasto}</li>
        <li className="lista">$ {gasto}</li>
      ))}
    </ul>
  );
}

function AgregarGasto({ setGastos_in }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gasto = event.target.elements.gasto.value;
    console.log(gasto);
    if (Number.isInteger(Number.parseInt(gasto))) {
      setGastos_in((prevGastos) => [...prevGastos, Number.parseInt(gasto)]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" autocomplete="off" type="text" id="gasto" />
      <button className="boton" type="Submit">
        {" "}
        Agregar gasto{" "}
      </button>
    </form>
  );
}

function Transacciones({ gastos_in }) {
  return (
    <div className="transacciones">
      {" "}
      Cantidad de transacciones: {gastos_in.length}
    </div>
  );
}

export default App;
