import React from "react";

function Historial(props) {
  return (
    <div className="recordatorio">
      <h3>Seleccion anterior: {props.eleccionAnterior}</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ol
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {props.historial.map((eleccion, i) => (
          <li key={i} style={{ color: "orange", marginRight: "30px" }}>
            {eleccion} /
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Historial;
