import React, { useState } from "react";

function App() {
  return (
    <>
      <Contador/>
      <GastosMes/>
      <AgregarGasto/>
    </>
  );
}

function Contador (){
  return <div> Gasto mensual: </div>;
}

function GastosMes (){
  const [gastos, setGastos] = useState([1500, 300, 450])

return (
  <ul>
    {gastos.map ((gasto) =>( <li key = {gasto}>{gasto}</li>
    ))}
  </ul>
);
}

function AgregarGasto () {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    console.log (gasto)
  }

return (
  <form onSubmit = {handleSubmit}>
    <input autocomplete="off" type = "text" id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
)
}


export default App;
