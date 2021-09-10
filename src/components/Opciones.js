import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button
            id="A"
            className="botones"
            onClick={() => {
              this.props.seleccion("A");
            }}
          >
            A
          </button>
          <h2>{this.props.data.a}</h2>
        </div>
        <div className="opcion">
          <button
            id="B"
            className="botones"
            onClick={() => {
              this.props.seleccion("B");
            }}
          >
            B
          </button>
          <h2>{this.props.data.b}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
