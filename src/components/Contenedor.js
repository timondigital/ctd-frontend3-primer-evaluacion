import React from "react";
import Historial from "./Historial";
import SeccionTexto from "./SeccionTexto";
import Opciones from "./Opciones";
import textos from "./data.json";
import { render } from "react-dom";

let historial = [];
class Contenedor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [...textos],
      count: 0,
      eleccion: 1,
      eleccionAnterior: "Aún no ha seleccionado nada",
      historial: historial,
    };
  }

  //   componentDidMount() {
  //     this.setState({ data: textos }); //...textos
  //     console.log("data", this.state.data);
  //   }

  seleccion = (seleccion) => {
    if (this.state.count > 7) {
      historial = [];
      this.setState({
        eleccion: 1,
        count: 0,
        eleccionAnterior: "Aún no ha seleccionado nada",
        historial: historial,
      });
    } else if (seleccion === "A" && this.state.eleccionAnterior !== "A") {
      this.setState({
        eleccion: this.state.count + 1 + "a",
        count: this.state.count + 1,
        eleccionAnterior: "A",
      });
      historial.push("A");
    } else if (seleccion === "A" && this.state.eleccionAnterior === "A") {
      this.setState({
        eleccion: this.state.count + 2 + "a",
        count: this.state.count + 2,
        eleccionAnterior: "A",
      });
      historial.push("A");
    } else if (seleccion === "B" && this.state.eleccionAnterior !== "A") {
      this.setState({
        eleccion: this.state.count + 2 + "b",
        count: this.state.count + 2,
        eleccionAnterior: "B",
      });
      historial.push("B");
    } else {
      this.setState({
        eleccion: this.state.count + 3 + "b",
        count: this.state.count + 3,
        eleccionAnterior: "B",
      });
      historial.push("B");
    }
  };

  render() {
    return (
      <div className="layout">
        <SeccionTexto data={this.state.data} count={this.state.count} />
        <Opciones
          data={this.state.data[this.state.count].opciones}
          seleccion={this.seleccion}
        />
        <Historial
          historial={this.state.historial}
          eleccionAnterior={this.state.eleccionAnterior}
          eleccion={this.state.eleccion}
        />
      </div>
    );
  }
}

export default Contenedor;
