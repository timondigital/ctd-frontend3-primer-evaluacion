import React from "react";

class SeccionTexto extends React.Component {
  render() {
    return (
      <h1 className="historia">{this.props.data[this.props.count].historia}</h1>
    );
  }
}
export default SeccionTexto;
